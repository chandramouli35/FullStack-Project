// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// connectDB(); // Call this before starting the server

// // Load environment variables
// dotenv.config();

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // for parsing application/json

// // Import routes
// const contactRoutes = require("./routes/contactRoutes");

// // Use Routes
// app.use("/api/contact", contactRoutes);

// // Setup a default route for testing
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// // Define port and start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing request bodies
app.use(express.json());

// Import routes
const contactRoutes = require("./routes/contactRoutes");

// Use routes
app.use("/api/contact", contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
