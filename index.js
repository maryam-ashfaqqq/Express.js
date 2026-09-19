
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
//   const absPath = path.resolve('views/home.html')
//    resp.sendFile(absPath)
// });

//   app.get("/login",(req , resp)=>{
//   const absPath = path.resolve('views/login.html')
//    resp.sendFile(absPath)
// });
  
//   app.get("/submit",(req , resp)=>{
//   const absPath = path.resolve('views/submit.html')
//    resp.sendFile(absPath)
// });
// app.get("/about",(req , resp)=>{
//   const absPath = path.resolve('views/about.html')
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

//         import express from "express"
//      const app = express(); 
    
//  function ipCheck(req  , resp ,next) {
//   const ip = req.socket.remoteAddress
//  console.log(ip);
//  if (ip.includes("192.168.100.46")) {
//   resp.send("Alert! , You cannot Access")
//  }else{
// next();
// }}
//  app.use(ipCheck)
//     app.get("/",(req , resp)=>{
//       resp.send("Home Page")                                      
// });
//  app.get("/about",(req , resp)=>{
//       resp.send("About Page")                                      
// });
//  app.get("/login",(req , resp)=>{
//       resp.send("Login Page")                                      
// });
// app.listen(3600)

                                                         // Route Middleware

// import express from "express"
//      const app = express(); 
//     function ageCheck(req  , resp ,next) {
//         console.log(req.query.age);
        
//    if (!req.query.age || req.query.age<18) {
//     resp.send("Alert ! You can not access")
//    }
// else{
//     next()
// }}
//   app.get("/",(req  , resp )=> {
// resp.send("Home Page")
//   });
//  app.get("/about",(req , resp)=>{
//         resp.send("About Page")                                     
//     });
//   app.get("/login",ageCheck,(req , resp)=>{
//       resp.send("Login Page")                                      
//      });


// app.listen(3700)

                                                      //   Built in Middleware
                        
//  import express from "express"
//       const app = express(); 
//  app.get("/",(req  , resp )=> {
//  resp.send("Home Page")
//    });
//   app.get("/about",(req , resp)=>{
//          resp.send("About Page")                                     
//     });
//     app.use(express.urlencoded({extended:false}))
//    app.get("/login",(req , resp)=>{
//        resp.send(`<form action="/submit" method="post">
//     <h1>Web Page</h1>
//     <br />
//     <br />
//     <input type="text" name="name" placeholder="enter name">
//     <br />
//     <br />
//     <input type="password" name="password" placeholder="enter password">
//     <br />
//     <br />
//     <button>Click</button>
//     <br />
//     <br />
//     <a href='/'> Go to Home </a>
// </form>`)                                      
//       });
// app.post("/submit",(req , resp)=>{
//     console.log("user details are :", req.body);
    
//        resp.send("Submit Page")                                      
//       });

//  app.listen(3800)

                                                         //    External Middleware   npx nodemon index.js
                                                    
  //  import morgan from "morgan";
  //   import express from "express"
  //          const app = express(); 
  //          app.use(morgan("dev"))
  // app.get("/",(req  , resp )=> {
  // resp.send("Home Page")
  //   });
  // app.get("/about",(req , resp)=>{
  //        setTimeout(() => {
  //          resp.send("About Page")
  //        }, 1000);
                                               
  //    });                                           
                                                        //  Error Handling Middleware           
  //   app.use((req,resp,next)=> {
  //     resp.status(404).send("Page not Found")
  //     next(error)
  //    });
  // app.use((error,req,resp,next)=> {
  //     resp.status(error.status || 500).send("Server Down")
  //     next(error)
  //    });
     
  // app.listen(3900)
                                                
                                                        //  Temple Engine  (Embedded JS)
// import express from "express"
//            const app = express(); 
//     app.set("view engine" , "ejs")    
//   app.get("/",(req  , resp )=> {
//   resp.render("home",{name:"Maryam",course:"Express"})
//     });
//   app.get("/about",(req , resp)=>{
//   resp.send("About Page")                                           
//      });               
//      app.listen(4000) 
                                                          //  MVC Architecture with Node 
//    import express from "express"
// import handleUser from "./controller/user.js";
//            const app = express(); 
//     app.set("view engine" , "ejs")    
//   app.get("/",handleUser);
//   app.get("/home",(req , resp)=>{
//   resp.send("Home Page")                                           
//      });               
//      app.listen(4100) 
                                                          
                                                        // Dynamic Routes

 import express from "express"

           const app = express();  
  
  app.get("/",(req , resp)=>{
    const users=["Lichi" , "Grapes" , "Cow" , "Cat"]
    let data =`<ul>`;
    for(let i=0;i<users.length;i++){
      data+=`<li><a href="user/${users[i]}">${users[i]}</a></li>`
     }
    data+= `</ul>`
  resp.send(data)                                           
     });  
     app.get("/user/:name",(req , resp)=>{
      const userName=req.params.name;
   resp.send(`This is ${userName}'s profile page`)                                           
      }); 
  app.listen(4200) 
