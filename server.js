require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const postRoutes = require("./routes/post");
const websiteRoutes = require("./routes/website");

const EmailRoutes = require("./routes/email");
const testiRoutes = require("./routes/testi");

const path = require("path");
const morgan = require("morgan");
const app = express();
const http = require("http").createServer(app);

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", postRoutes);
app.use("/api", websiteRoutes);

app.use("/api", EmailRoutes);
app.use("/api", testiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "mine/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "mine", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const port = process.env.PORT || 8000;

http.listen(port, () => console.log("Server running on port 8000"));
