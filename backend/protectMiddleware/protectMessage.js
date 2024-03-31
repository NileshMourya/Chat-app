import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const protectMessage = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(500).json({ error: "unauthorized user" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(500).json({ error: "unauthorized token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      res.status(500).json({
        error: "user not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" + error.message });
  }
};
