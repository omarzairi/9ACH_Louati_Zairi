import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/Auth.js";
import User from "../Models/userModel.js";
import generateToken from "../utils/generateToken.js";

const userRoute = express.Router();

userRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const user = await User.find({});
    res.json(user);
  })
);
userRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const emailf = req.body.email;

    const password = req.body.password;
    const user = await User.findOne({ email: emailf });

    if (user && password == user.password) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ msg: "Invalid Email or Password !" });
    }
  })
);
userRoute.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExiste = await User.findOne({ email });
    if (userExiste) {
      res.status(401);
      throw new Error("User Already Exists !");
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.status(401);
        throw new Error("Verify Info");
      }
    }
  })
);
userRoute.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User Not Found !");
    }
  })
);
userRoute.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updated = await user.save();
      res.json({
        _id: updated._id,
        name: updated.name,
        email: updated.email,
        isAdmin: updated.isAdmin,
        token: generateToken(updated._id),
      });
    } else {
      res.status(404);
      throw new Error("User Not Found !");
    }
  })
);
export default userRoute;
