const aiService = require("../services/ai.services");

module.exports.getReview = async (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const summary = await aiService.summarizeText(text);
    res.json({ summary });  // Safer response
  } catch (err) {
    console.error('Summarization error:', err);
    res.status(500).send("Internal Server Error");
  }
};
