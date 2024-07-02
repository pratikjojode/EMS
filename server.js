const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");
// config the env file
dotenv.config();
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
// routes for users
app.use("/api/v1/users", require("./routes/userRoutes"));

// transaction routes

app.use("/api/v1/transaction", require("./routes/transactionRoutes"));
// port
const PORT = 8080 || process.env.PORT;

// listen port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
