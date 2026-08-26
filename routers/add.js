const express=require("express")
const taskSchema=require("../schema/tasksSchema")

const addTask=express.Router()




addTask.post("/addTask",async(req,res)=>{
    try{
    
        const Task=new taskSchema({
            task:req.body.Task
        })

        await Task.save();
        res.send(Task)
        
    }
    catch(err){
        res.status(404).send(err)
    }
})



module.exports=addTask