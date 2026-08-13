import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  [
    body("company").notEmpty().withMessage("company name required"),
    body("position").notEmpty().withMessage("position name required"),
    body("jobLocation").notEmpty().withMessage("Job location name required"),
    body("jobStatus")
      .isIn(Object.values(JOB_STATUS))
      .withMessage("Invalid Job Status"),
    body("jobType")
      .isIn(Object.values(JOB_TYPE))
      .withMessage("Invalid Job Type"),
  ],
]);
