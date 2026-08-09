import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

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

export const validateCreate = withValidationErrors([
  [
    body("company")
      .notEmpty()
      .withMessage("company name required")
      .isLength({ min: 3, max: 50 })
      .withMessage("Company name must be between 3 and 50")
      .trim(),
  ],
]);
