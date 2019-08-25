const Task = require('../models/task');
module.exports.home = function(req, res){
    let tasks = Task.find({});
    return res.render('home', {
        title: 'TODO App',
        tasks: tasks
    });
};

