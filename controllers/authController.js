import User from "../models/UserModel";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs/dist/bcrypt";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const user = await User.create(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  res.status(StatusCodes.CREATED).json({ user });
};
export const login = async (req, res) => {};
