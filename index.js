 // const express = require("express");
                                                 //  Render HTML element in Express
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
  




                                                    //   Render HTML FILE in Express
import express from "express"
import path from "path"
const app = express();
const publicPath =path.resolve("view")
app.use(express.static(publicPath));
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

                                                          //   Make 404 Page
 app.use((req , resp)=>{
  const absPath = path.resolve('view/404.html')
    resp.status(404).sendFile(absPath)
 });
  app.listen(3300)


                                                        //  Add CSS File
                                                       

