import mongoose from "mongoose";

const uri = "mongodb+srv://chatbotadmin:chatbot12345@cluster0.5bbvbvy.mongodb.net/ai_chatbot?retryWrites=true&w=majority&appName=Cluster0";

console.log("Connecting...");

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    process.exit(1);
  });