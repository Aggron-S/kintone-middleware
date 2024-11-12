require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Server env
const SERVER_PORT = process.env.SERVER_PORT;
const ORIGIN = process.env.ORIGIN;

var corsOptions = {
  origin: ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Route
const route = require("./routes/route");
app.use("/", route);

// Middleware (error / some other middleware)

try {
  app.listen(SERVER_PORT, () =>
    console.log(`Server listening on port: ${SERVER_PORT}`)
  );
} catch (error) {
  console.error("Connection error: ", error);
}
