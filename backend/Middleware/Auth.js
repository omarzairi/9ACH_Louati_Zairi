import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decrypt = Jwt.verify(token, "9ACHproject");
      req.user = await User.findById(decrypt.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Sorry Token Failed !");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Sorry not authorized !");
  }
});
export default protect;
