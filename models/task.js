const mongoose = require('mongoose');
//create the schema for one document of the collection (i.e. define the fields and constraints for them)
const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    dueDate: {
        type: String,
        required: true
    }
});
//Now the collection
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;