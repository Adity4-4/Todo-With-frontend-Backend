const express=require("express");
const Task=require("../schema/tasksSchema")

const Router=express.Router()

Router.delete("/delete/:id",async(req,res)=>{
    const data=await Task.deleteOne({_id:req.params.id})
    res.send("deleted succesful")
})

module.exports=Router