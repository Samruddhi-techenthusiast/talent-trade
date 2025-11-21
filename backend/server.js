require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();


app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Talent Trade API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
