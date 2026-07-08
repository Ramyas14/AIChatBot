import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);

    res.status(error.status || 500).json({
      error: error.message,
      status: error.status,
      details: error,
    });
  }
};