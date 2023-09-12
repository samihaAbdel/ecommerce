const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const connectDB = require("./config/connectDB");
connectDB();

//routes
app.use("/api", require("./routes/user"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/category", require("./routes/category"));
PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${PORT}`);
});
