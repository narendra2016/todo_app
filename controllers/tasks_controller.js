const Task = require('../models/task');

//add task
module.exports.add = function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function(err, newTask){
        if(err){
            console.log('error in adding the task');
            return;
        }
        return res.redirect('back');
    });
};

//delete tasks
module.exports.delete = async function(req, res){
    var keys = Object.keys(req.body);
    async function deleteTask(id){
        await Task.findByIdAndDelete(id);
    }
    keys.forEach(deleteTask)
    return res.redirect('back');
};