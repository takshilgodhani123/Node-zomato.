const Token = require("../models");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const generateToken = async (reqBody) => {
  let payload = {
    ...reqBody,
    expire_time: reqBody.expire_time.unix(),
  };
  return jwt.sign(payload, config.jwt.secret_key);
};

const saveToken = async (reqBody) => {
  return Token.findOneAndUpdate(
    {user: reqBody.user},
    { $set: { ...reqBody } },
    { new: true, upsert: true }
  );
};

module.exports = {
    generateToken,
    saveToken
}