// route in express means how tour backend respond.evrry router in  express hass 3 routes end pioint,handler,http
// // app.get('/home',(req,res)=>{
    // resizeBy.send("welcome")})
// static endpoint dynamic end point.. end point means url+http
// browser by default take small case
// path parameters means dynamic parameter of url.
// app.get('/user/:id',(req,res)=>{
    // resizeBy.send("welcome")}))  :id is the dynamic parameter


    import express from  'express';
    // import {readFileSync, writeFileSync} from 'fs'

    const app= express()
    app.use(express.json());
//     function readData(){
//         const data=readFileSync("db.json","utf-8")
//         return JSON.parse(data)
//     }

//     function writeData(data){
// writeFileSync("db.json",JSON.stringify(data,null,2))
//     }

    // //  add user

    // app.post("/users",(req, res)=>{
    //     const data=readData();
    //     data.users.push(req.body)
    //     writeData(data);
    //     res.send("user data")
    // })
    // // get user

    // app.get("/users/:id",(req,res)=>{ // dynamic parameter routing
    //     const data=readData();
    //     const user = data.users.find(u => u.id === parseInt(req.params.id));
    //     if(user) {
    //         res.send(user);
    //     } else {
    //         res.status(404).send("User not found");
    //     }
    // })
    
    // // update user

    // app.put("/users/:id",(req,res)=>{
    //     const data=readData();
    //     const user=data.users.find(u => u.id === parseInt(req.params.id));   
    //     if(user){
    //         user.name=req.body.name;
    //         writeData(data);
    //         res.send("user updated");
    //     } else {
    //         res.status(404).send("User not found");
    //     }
    // })

    // // delete user

    // app.delete("/users/:id",(req,res)=>{
    //     const data=readData();
    //     data.users = data.users.filter(u => u.id !== parseInt(req.params.id));    
    //     writeData(data);
    //     res.send("user deleted");
    // })


    const users=[
       { id:3,
        names:"rahul", 
        active:true},
       { id:3,
        names:"rahul",   
        active:true
    },
       { id:3,
        names:"rahul" , 
        active:true
    },
       { id:3,
        names:"rahul" , 
        active:true
       }
    ]
app.get("/users",(req,res)=>{
    let result=[...users];
    if(req.query.active){
        result=result.filter(u=>u.active=== (req.query.active==="true"))
    }
    res.send(result);
})
    app.listen(3000,()=>{
        console.log("server started")
    })
// query parameters is a way to pass data to the server as key value pair
