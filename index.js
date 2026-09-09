 // const express = require("express");
                                                      //  FORM
// import express from "express"
// import home from "./pages/home.js";
// import about from "./pages/about.js";
// import login from "./pages/lines/login.js";
// import submit from "./pages/lines/submit.js";
// const app = express();

// app.get("/",(req , resp)=>{ 
// resp.send(home())
// });

// app.get("/about",(req , resp)=>{
// resp.send(about())
// });

// app.get("/login",(req , resp)=>{
// resp.send(login())
// });
// app.post("/submit" , (req , resp)=>{
//   resp.send(submit())
// });
// app.listen(3200)
  




                                                       // HTML FILE
import express from "express"
import path from "path"


 const app = express();
  app.get("/",(req , resp)=>{
  const absPath = path.resolve('view/home.html')
   resp.sendFile(absPath)
});

  app.get("/login",(req , resp)=>{
  const absPath = path.resolve('view/login.html')
   resp.sendFile(absPath)
});
  
  app.get("/submit",(req , resp)=>{
  const absPath = path.resolve('view/submit.html')
   resp.sendFile(absPath)
});
app.get("/about",(req , resp)=>{
  const absPath = path.resolve('view/about.html')
   resp.sendFile(absPath)
});
 app.listen(3300)
