import express from "express";
import { deleteProfileController, resetPasswordRequestController, getAllUsersController, loginUserController, logoutUser, registerUserController, resetPasswordController, updateProfileController, userProfileController, updatePasswordController, getUserByIdController, deleteProfileByIdController } from "../controllers/userController.js";
import { isAdmin, isAuthenticatedUser } from "../utils/userAuth.js";
const userRouter = express.Router();

userRouter.post("/register-user", registerUserController);
userRouter.post("/login-user", loginUserController)
userRouter.get("/user-profile", isAuthenticatedUser, userProfileController)
userRouter.get("/admin-user-profile/:id", isAuthenticatedUser, isAdmin("admin"), getUserByIdController)
userRouter.put("/update-profile", isAuthenticatedUser, updateProfileController)
userRouter.delete("/delete-profile", isAuthenticatedUser, deleteProfileController)
userRouter.delete("/delete-profile/:id", isAuthenticatedUser, isAdmin("admin"), deleteProfileByIdController)
userRouter.get("/get-all-users", isAuthenticatedUser, isAdmin("admin"), getAllUsersController);
userRouter.post("/logout-user", isAuthenticatedUser, logoutUser)
userRouter.post("/forgot-password", resetPasswordRequestController)
userRouter.post("/reset-password/:token", resetPasswordController)
userRouter.put("/update-password", isAuthenticatedUser, updatePasswordController)

export default userRouter


