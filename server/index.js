require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordReset = require("./routes/PasswordReset")

const resumeRoute = require("./routes/resumeroute")
// database connection

connection();

// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/resume", resumeRoute)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset",passwordReset)
const port = process.env.PORT || 5050;
app.listen(port, console.log(`Listening on port ${port}...`));