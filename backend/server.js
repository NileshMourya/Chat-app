import express from "express";
import dotenv from "dotenv";
import authrouter from "./routes/auth.router.js";
import messageRoute from "./routes/message.router.js";
import userRoute from "./routes/users.router.js";
import ConnectToMongoDB from "./DB/ConnectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/auth/api", authrouter);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  ConnectToMongoDB();
  console.log(`server is running on port ${port}`);
});
