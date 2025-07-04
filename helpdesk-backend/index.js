const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data
let tickets = [
  { id: 1, subject: "Login issue", status: "Open", priority: "High" },
  { id: 2, subject: "UI Bug", status: "In Progress", priority: "Low" },
];

let userLogs = [
  {
    id: 1,
    staffId: "EMP001",
    department: "Technical Support",
    activity: "Signed In",
    signIn: "09:00 AM",
    signOut: "06:00 PM",
    date: "2025-07-04"
  },
  {
    id: 2,
    staffId: "EMP002",
    department: "Operations Team",
    activity: "Signed In",
    signIn: "10:00 AM",
    signOut: "07:00 PM",
    date: "2025-07-04"
  }
];

// This array will store new login logs
let loginLogs = [];

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Helpdesk Backend Running");
});

// ====================== TICKETS =======================
// Get all tickets
app.get("/api/tickets", (req, res) => {
  res.json(tickets);
});

// Add a new ticket
app.post("/api/tickets", (req, res) => {
  const newTicket = { id: Date.now(), ...req.body };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

// ==================== USER LOGS =======================
// Get all user logs (static + dynamic login logs)
app.get("/api/logs", (req, res) => {
  res.json([...userLogs, ...loginLogs]);
});

// Add a login log (on login success)
app.post("/api/logs", (req, res) => {
  const log = req.body;
  log.id = userLogs.length + loginLogs.length + 1;
  loginLogs.push(log);
  res.status(201).json({ message: "Log saved", log });
});

// =================== LOGIN API ========================
// Simulate login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "vasundara" && password === "yourlenssmart") {
    res.json({ success: true, role: "Admin" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
