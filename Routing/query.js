import express, { json, Router } from 'express';
const router=express.Router(); // creating router instance

let user=[
    { id:1, name:"rahul", active:true},
    { id:2, name:"sonam", active:false},
    { id:3, name:"anil", active:true},
    { id:4, name:"sita", active:false}
]

router.get("/",(req,res)=>res.json(user));

router.get("/:id",(req,res)=>{
    const usr=user.find(u=>u.id===Number(req.params.id));
    res.json(usr||{message:"user not found"});
})

router.post("/",(req,res)=>{
    const {id,name,active}=req.body;

if(user.find(u=>u.id===id)){
    return res.status(400).json({message:"user with this id already exists"});
}
    user.push({id,name,active});
    res.json({message:"user added successfully",user});
});


router.delete("/:id",(req,res)=>{
    user=user.filter(u=>u.id!==Number(req.params.id));
    res.json({message:"user deleted successfully",user});
});

router.put("/:id",(req,res)=>{
    const usr=user.find(u=>u.id===Number(req.params.id));
    if(!usr){
        return res.status(404).json({message:"user not found"});
    }
   user.name=req.body.name??usr.name;
   usr.active=req.body.active!==undefined ? req.body.active : usr.active;
    res.json({message:"user updated successfully",user});
});


export default router;