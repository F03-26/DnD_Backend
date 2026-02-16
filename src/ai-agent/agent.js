const { GoogleGenAI } = require("@google/genai");
const dotenv = require('dotenv');

dotenv.config();

const ai = new GoogleGenAI({});

async function askAgent(prompt) {
  const response = await ai.models.generateContent({
    model: process.env.GEN_MODEL,
    contents: prompt,
  });
  return response.text;
}

module.exports = { askAgent };