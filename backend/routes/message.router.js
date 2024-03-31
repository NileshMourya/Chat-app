import express from "express";
import { sendMessage, getMessage } from "../Controller/message.controller.js";
import { protectMessage } from "../protectMiddleware/protectMessage.js";
const router = express.Router();
router.get("/:id", protectMessage, getMessage);
router.post("/send/:id", protectMessage, sendMessage);
export default router;
