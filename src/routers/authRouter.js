import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { authenticateTokenMiddleware } from "../middlewares/authenticateTokenMiddleware.js";
import { getUser } from "../controllers/getUser.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(signUpSchema), signUp);
authRouter.post("/signin", validateSchemaMiddleware(signInSchema), signIn);
authRouter.get("/users/:id", authenticateTokenMiddleware, getUser);


export default authRouter;