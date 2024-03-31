import User from "../model/userModel.js";

export const getUsersForSideBar = async (req, res, next) => {
  try {
    const LoggedInUser = req.user._id;

    const filterUser = await User.find({
      _id: { $ne: LoggedInUser },
    }).select("-password");
    res.status(201).json(filterUser);
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" + error.message });
  }
};
