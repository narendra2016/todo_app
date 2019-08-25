//require the Task model
const Task = require('../models/task');
//Controller for handling tasks

//action for adding task
module.exports.add = function(req, res){
    //create the task in database
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate,
        date: req.body.dueDate
    }, function(err, newTask){
        if(err){
            console.log('error in adding the task');
            return;
        }
        return res.redirect('back');
    });
};

//action for deleting tasks
module.exports.delete = async function(req, res){
    //get all the keys, from request body, which will be the ids of tasks to be deleted
    var keys = Object.keys(req.body);
    //function to be called upon each of the keys
    async function deleteTask(id){
        await Task.findByIdAndDelete(id);
    }
    //iterating over the keys (ids of tasks to be deleted)
    keys.forEach(deleteTask)
    return res.redirect('back');
};