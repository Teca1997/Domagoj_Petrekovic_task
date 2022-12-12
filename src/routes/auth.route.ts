import { AuthController } from "../controllers/auth.controller";
import { AuthValidator } from "../validators/auth.validator";
import express from "express";
import { validate } from "../middlewares/validate";

const router = express.Router();

router.post(
  "/register",
  validate(AuthValidator.registration),
  AuthController.register
);

router.post(
  "/verifyemail",
  validate(AuthValidator.emailVerification),
  AuthController.verifyEmail
);

export const AuthRouter = { router };
