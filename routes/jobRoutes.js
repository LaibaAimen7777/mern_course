import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
} from "../controllers/jobController.js";
import { validateCreate } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateCreate, createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
