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
// import express from "express"
// import path from "path"
// const app = express();
                                                    //  Add CSS File
// const publicPath =path.resolve("view")
// app.use(express.static(publicPath));
//   app.get("/",(req , resp)=>{
//   const absPath = path.resolve('view/home.html')
//    resp.sendFile(absPath)
// });

//   app.get("/login",(req , resp)=>{
//   const absPath = path.resolve('view/login.html')
//    resp.sendFile(absPath)
// });
  
//   app.get("/submit",(req , resp)=>{
//   const absPath = path.resolve('view/submit.html')
//    resp.sendFile(absPath)
// });
// app.get("/about",(req , resp)=>{
//   const absPath = path.resolve('view/about.html')
//    resp.sendFile(absPath)
// });

                                                          //   Make 404 Page
//  app.use((req , resp)=>{
//   const absPath = path.resolve('view/404.html')
//     resp.status(404).sendFile(absPath)
//  });
//   app.listen(3300)


                                                          //Application level Middleware in express js
                                                      
//      import express from "express"
//      const app = express(); 
 
//  app.use((req , resp ,next) => {
//   console.log("user is accessing " +req.url+ " page");
  
//   next()
//  });
//     app.get("/",(req , resp)=>{
//       resp.send("Home Page")                                      
// });
// app.get("/user",(req , resp)=>{
//       resp.send("User Page")
// });
// app.get("/product",(req , resp)=>{
//       resp.send("Product Page")
// });

//    app.listen(3400)

                                                           //  For age check
//         import express from "express"
//      const app = express(); 
    
//  function ageCheck(req  , resp ,next) {
//   if (!req.query.age || req.query.age<18) {
//     resp.send("Alert ! You can not access")
//   }else{
//   next();
//  }}
//  app.use(ageCheck)
//     app.get("/",(req , resp)=>{
//       resp.send("Home Page")                                      
// });
//  app.get("/about",(req , resp)=>{
//       resp.send("About Page")                                      
// });
//  app.get("/login",(req , resp)=>{
//       resp.send("Login Page")                                      
// });
// app.listen(3500)

                                                             // For ipCheck

        import express from "express"
     const app = express(); 
    
 function ipCheck(req  , resp ,next) {
  const ip = req.socket.remoteAddress
 console.log(ip);
 if (ip.includes("192.168.100.46")) {
  resp.send("Alert! , You cannot Access")
 }else{
next();
}}
 app.use(ipCheck)
    app.get("/",(req , resp)=>{
      resp.send("Home Page")                                      
});
 app.get("/about",(req , resp)=>{
      resp.send("About Page")                                      
});
 app.get("/login",(req , resp)=>{
      resp.send("Login Page")                                      
});
app.listen(3600)
console.log('hey');
