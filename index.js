// const express = require("express");

import express from "express"
import home from "./pages/home.js";
import about from "./pages/about.js";
import line from "./pages/lines/line.js";
const app = express();

app.get("/",(req , resp)=>{ 
resp.send(home())
});

app.get("/about",(req , resp)=>{
resp.send(about())
});

app.get("/about/line",(req , resp)=>{
resp.send(line())
});
app.listen(3200)
