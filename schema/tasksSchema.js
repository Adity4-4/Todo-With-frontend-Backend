const mongoose=require("mongoose")





const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        required: true
    }
},{
    timestamps:true
})

const taskSche=mongoose.model("taskSche",taskSchema)

module.exports=taskSche;