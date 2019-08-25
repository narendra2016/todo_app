//require the Task model
const Task = require('../models/task');
//controller action for home view
module.exports.home = async function(req, res){
    let tasks = await Task.find({}).sort('date');
    return res.render('home', {
        title: 'TODO App',
        tasks: tasks
    });
};

