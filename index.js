const express = require('express');
const app = express();
const port = 8000;

//use static files from asset folder
app.use(express.static('./assets'));
//use express router
app.use('/', require('./routes'));

//set ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    } else{
        console.log(`Server is running at port: ${port}`);
    }
});