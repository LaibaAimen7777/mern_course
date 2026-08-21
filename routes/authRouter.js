import { Router } from "express";
const router = Router();
import { login, register } from "../controllers/authController";
import { validateRegisterInput } from "../middleware/validationMiddleware";

router.post("./register", validateRegisterInput, register);
router.post("./login", login);

export default router;
