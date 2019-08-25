const Task = require('../models/task');
module.exports.home = async function(req, res){
    let tasks = await Task.find({});
    return res.render('home', {
        title: 'TODO App',
        tasks: tasks
    });
};

