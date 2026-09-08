// const express = require("express");

import express from "express"
import home from "./pages/home.js";
import about from "./pages/about.js";
import login from "./pages/lines/login.js";
import submit from "./pages/lines/submit.js";
const app = express();

app.get("/",(req , resp)=>{ 
resp.send(home())
});

app.get("/about",(req , resp)=>{
resp.send(about())
});

app.get("/login",(req , resp)=>{
resp.send(login())
});
app.post("/submit" , (req , resp)=>{
  resp.send(submit())
});
app.listen(3200)
