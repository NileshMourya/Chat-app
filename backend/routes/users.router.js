import express from "express";
import { protectMessage } from "../protectMiddleware/protectMessage.js";
import { getUsersForSideBar } from "../Controller/user.controller.js";

const router = express.Router();
router.get("/", protectMessage, getUsersForSideBar);

export default router;
