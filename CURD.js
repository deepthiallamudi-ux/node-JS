// modules-pacakages-library-frameworks
import express from 'express';
const app=express();

// app.get("/home",(req,res)=>{
//     res.send("welcome to home page,Namaste");
// });
// app.listen(4000,()=>{
//     console.log("server is running on port 4000, YAY!");
// });

// app.get("/user",()=>{}); //fetch user data
// app.post("/user",()=>{}); //create user
// app.put("/user/:id",()=>{}); //update user
// app.delete("/user/:id",()=>{}); //delete user

// app.get("/user/",(req,res)=>{
app.post("/user/",(req,res)=>{
     res.json({message:"user created"});
    console.log("hiiiiiiii");
});


app.listen(4000,()=>{
    console.log("server is running on port 4000, YAY!");
});

// node js reads code only once.node reads the file and keeps it in memory. so if any changes are made to the file after the server is started, those changes will not be reflected until the server is restarted. after every chance we have to stop and start the server again. to avoid this we use nodemon. nodemon is a utility that will monitor for any changes in your source and automatically restart your server. it is a development dependency. to install nodemon use the following command:
// npm install -g nodemon
// to run the server using nodemon use the following command:
// nodemon CURD.js  
// curd operations - create, update, read, delete


// postman - to test api's .it is a tool that helps to test api's. we can send requests to the server and get responses from the server. we can also test different types of requests like GET, POST, PUT, DELETE etc. we can also send headers and body with the requests. it is very useful for testing api's.
