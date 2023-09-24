const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/connectDB");
connectDB();

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/category", require("./routes/category"));
app.use("/api/product", require("./routes/product"));
app.use("/api/user/cart", require("./routes/cart"));

PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${PORT}`);
});
