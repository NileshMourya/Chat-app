import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import { generateJwtToken } from "../utiles/jwtToken.js";

// signup function
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateJwtToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(500).json({ error: "invalid data" });
    }
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" });
  }
};

// login function
export const login = async (req, res) => {
  try {
    const { username, password } = req.body; // extracting data from body
    const user = await User.findOne({ username });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isCorrectPassword) {
      return res.status(400).json({ error: "Invalid username and password" });
    }

    generateJwtToken(user._id, res); //jwt generater
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logout successfull",
    });
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" });
  }
};
