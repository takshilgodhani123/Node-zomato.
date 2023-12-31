const { Admin } = require("../models");

const createAdmin = async (reqbody) => {
  return Admin.create(reqbody);
};

const getAdminList = async () => {
  return Admin.find()
    .populate("restaurant")
    .populate("order")
    .populate("food")
    .populate("country")
    .populate("state")
    .populate("city");
};

const getAdminByName = async (admin_name) => {
  return Admin.findOne({ admin_name });
};

const getAdminById = async (adminId) => {
  return Admin.findById(adminId);
};

const updateAdmin = async (adminId, reqbody) => {
  return Admin.findByIdAndUpdate(adminId, { $set: reqbody });
};

const deleteAdmin = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

module.exports = {
  createAdmin,
  getAdminList,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
