import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const user = await User.create(req.body);

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  res.status(StatusCodes.CREATED).json({ msg: "User created " });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    UnauthenticatedError("Invalid credentials");

    res.send("login route");
  }
};
