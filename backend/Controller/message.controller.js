import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error occur in signup controller", error);
    res.status(500).json({ error: "Internal Server" });
  }
};

//get message function

export const getMessage = async (req, res, next) => {
  try {
    const { id: getChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, getChatId] },
    }).populate("messages");

    res.status(201).json(conversation.messages);
  } catch (error) {
    console.log("Error occur in get message controller", error);
    res.status(500).json({ error: "Internal Server" });
  }
};
