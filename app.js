console.log("Web serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

// MongoDB connect
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4:Routing code
// app.get("/", function (req, res) {
//   res.end("<h1>Hello World!</h1>");
// });
// app.get("/gift", function (req, res) {
//   res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
// });
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // if (err) {
    //   console.log(err);
    //   res.end("Something went wrong");
    // } else {
    //   res.end("Succesfully added");
    // }
    res.json(data.ops[0]);
  });
  //   res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
