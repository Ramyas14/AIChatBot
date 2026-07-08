import { useState } from "react";
import axios from "axios";
function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
  if (message.trim() === "") return;

  try {
    const res = await axios.post(
      "http://localhost:5000/api/chat",
      {
        message: message,
      }
    );

    setReply(res.data.reply);
    setMessage("");
  } catch (error) {
    alert("AI Error");
    console.log(error);
  }
};
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-600 text-white p-4 text-2xl font-bold">
        AI Chatbot
      </div>

      {/* Chat Area */}
      <div className="h-[75vh] p-5 overflow-y-auto">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">
            {reply || "Start chatting with the AI..."}
            </p>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full bg-white p-4 border-t flex">

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-lg p-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="ml-3 bg-blue-600 text-white px-6 rounded-lg"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;