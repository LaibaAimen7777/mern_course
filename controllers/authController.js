import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils";

const oneDay = 1000 * 60 * 60 * 24;

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

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  res.send({ token });
};
