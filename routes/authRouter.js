import { Router } from "express";
const router = Router();
import { login, register } from "../controllers/authController";

router.post("./register", register);
router.post("./login", login);

export default router;
