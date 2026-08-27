import bcrypt from "bcryptjs";
import { Result } from "express-validator";

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export const comparePasswords = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password);
  return isMatch;
};
