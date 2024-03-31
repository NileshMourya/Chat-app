import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB Connect succesfully");
  } catch (error) {
    console.log("Error Connecting DB", error.message);
  }
};

export default ConnectToMongoDB;
