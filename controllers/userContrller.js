import req from "express/lib/request";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get current user" });
};
