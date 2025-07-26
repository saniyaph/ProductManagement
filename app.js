const express = require("express");
const connectDB = require("./db/db");
const session = require("express-session");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const methodOverride = require("method-override");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/", userRouter);
app.use("/", productRouter);

app.listen(4000, () => {
  console.log("running");
});
