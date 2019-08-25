//set up the mongodb database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_app_db_development');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to the DB'));
db.once('open', function(){
    console.log('Successfully connected to the DataBase :: MongoDB');
});