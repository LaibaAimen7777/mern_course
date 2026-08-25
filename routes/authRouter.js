import { Router } from "express";
const router = Router();
import { login, register } from "../controllers/authController";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware";

router.post("./register", validateRegisterInput, register);
router.post("./login", validateLoginInput, login);

export default router;
