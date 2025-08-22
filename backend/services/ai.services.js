const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAi = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAi.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: `
    You are a helpful assistant that summarizes text.
    Provide a concise summary that includes the main points and key details.
    Do not add any extra or unrelated information.
  `,
});

async function summarizeText(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = await response.text();  // <-- this is async
    return summary;
  } catch (err) {
    console.error('Error in summarizeText:', err);
    throw err;
  }
}

module.exports = { summarizeText };
