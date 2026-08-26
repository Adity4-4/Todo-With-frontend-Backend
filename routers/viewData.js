const express=require("express")

const Router=express.Router()

const Task=require("../schema/tasksSchema")

Router.get("/viewdata",async (req,res)=>{
    const data=await Task.find()
    res.send(data)
})

module.exports=Router