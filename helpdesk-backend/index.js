const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let unauthorizedLogs = [];

app.post("/api/logs/unauthorized", (req, res) => {
  const log = req.body;
  unauthorizedLogs.push(log);
  console.log("❗ Unauthorized Access Logged:", log);
  res.status(201).json({ message: "Unauthorized access logged" });
});

app.get("/api/logs/unauthorized", (req, res) => {
  res.json(unauthorizedLogs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
