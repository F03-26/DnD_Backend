const { GoogleGenAI } = require("@google/genai");
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('Google GenAI API key missing. Set GOOGLE_API_KEY or GEMINI_API_KEY in your .env file.');
}

const ai = new GoogleGenAI({ apiKey });
const modelName = process.env.GEN_MODEL || 'gemini-1.5';

async function askAgent(prompt) {
  const response = await ai.models.generateContent({
    model: modelName,
    contents: prompt,
  });
  return response.text;
}

module.exports = { askAgent };