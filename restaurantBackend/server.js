const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectionDb = require("./middleware/connectionDb");
const authRouter = require("./router/authRouter");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

connectionDb().then(() => {
  app.listen(PORT, () => console.log(`Server connected on ${PORT}`));
});
