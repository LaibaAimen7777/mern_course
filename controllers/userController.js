import req from "express/lib/request";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDDocuments();

  res.status(StatusCodes.OK).json({ msg: "application stats" });
};

export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.userid, req.body);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
