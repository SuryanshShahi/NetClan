const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/users");
dotenv.config({ path: "./config.env" });
app.use(express.json());
var cors = require("cors");

app.use(cors())
// require("./db/conn");
// app.use(require("./auth"));

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`connection failed`, err));

// User.find({},function(err, users){
//     if(err) console.log(err);
//     console.log(users);
//   })

app.get("/users", function (req, res) {
  User.find().then((data) => {
    res.status(201).json(data);
  });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // })
}

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
