const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dataBase = require("./database");
const addTask = require("./routers/add");
const viewData=require("./routers/viewData")
const cors = require("cors");
const del=require("./routers/delete")
const edit=require("./routers/edit")
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-production-frontend-url.vercel.app'], // Add your deployed frontend URL here later!
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());


app.use("/", addTask);

app.use("/",viewData);

app.use("/",del);

app.use("/",edit)

dataBase
  .then(() => {
    console.log("connection is build");

    app.listen(7777, () => {
      console.log("App is running on port 7777");
    });
  })
  .catch(err => {
    console.log(err);
  });