const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const roomRouter = require("./routes/roomRoutes");
const bookingRouter = require("./routes/bookingRoutes");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

dotenv.config();
const port = process.env.PORT || 3000;
const DB = process.env.DB_URL;
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const app = express();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log("ERROR", err));

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json({ limit: "4mb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`This route ${req.originalUrl} doesn't exist.`, 404));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
