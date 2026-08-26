const express = require("express");
const Task = require("../schema/tasksSchema");

const Router = express.Router();

Router.patch("/edit/:id", async (req, res) => {
   try { 
        // Get the ID from the URL parameters
        const id = req.params.id;
        
        // Get the updated task from the request body
        const { task } = req.body; 

        const data = await Task.findByIdAndUpdate( 
            id,
            { task: task },
            { new: true }
        );
        
        res.send(data);
   } catch(err) {
        res.status(404).send(err);
   }
});

module.exports = Router;