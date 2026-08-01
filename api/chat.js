const { createChatResponse } = require("../server");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const result = await createChatResponse(payload);
    res.status(result.status).json(result.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      answer: "The assistant could not answer right now. Please try again later.",
    });
  }
};
