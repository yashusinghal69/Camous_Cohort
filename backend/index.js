const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoutes");
const AppRoutes = require("./routes/AppRoutes");
const { MONGO_URL, PORT } = process.env;
const passwordReset = require("./routes/PasswordResetRoutes");
const users = require("./routes/UserRoutes");
const communityRoutes = require('./routes/communityRoutes');

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
app.use("/", AppRoutes);

app.use("/users", users);
app.use("/password-reset", passwordReset);
app.use('/communities', communityRoutes);
