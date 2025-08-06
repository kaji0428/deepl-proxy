const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();

const PORT = process.env.PORT || 3000; // Renderが自動でPORTを割り当てる
const DEEPL_API_KEY = process.env.DEEPL_API_KEY; // 環境変数から読み込む

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/translate", async (req, res) => {
  try {
    const text = req.body.text;
    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "DeepL-Auth-Key " + DEEPL_API_KEY,
      },
      body: `text=${encodeURIComponent(text)}&target_lang=JA`,
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
