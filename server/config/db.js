import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("debug", true);

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Connected:", conn.connection.host);
  } catch (err) {
    console.error("FULL ERROR:");
    console.error(err);
  }
};

export default connectDB;