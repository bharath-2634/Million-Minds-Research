const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routers/auth/auth-router');
const mailRouter  = require('./routers/mail/mail-router');
const postRouter = require('./routers/posts/post-router');

mongoose
  .connect("mongodb+srv://bharath2005goo:bharath2005goo@cluster0.f4txwtb.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
      origin: "https://million-minds.onrender.com",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
);

app.use(passport.initialize());

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter);
app.use("/api/mail", mailRouter);
app.use("/api/posts",postRouter);



app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));