const express = require('express'); // imports express app
const res = require('express/lib/response');

const app = express();





function middleware1(req, res, next){
    console.log("I am a middleware 111")
   const errObj = new Error('I am a error ')
    next(errObj); // instructs code to move onto the next middleware
}

function errorHandler(err, req, res, next){ // an elegant want to deal with errors without crashing my site
    if(err){
        res.send('<h1> There was an error, please try again </h1>')

    }

}

app.use(middleware1); // global middleware which runs in the order it is called in BEWARE


function middleware2(req, res, next){
    console.log("I am a middleware2222")
    next(); 
}


function standardExpressCallback( req, res, next) { // route string & callback with next middleware
   console.log('Iam in the standard express cb')
    res.send('<h1>Hello World </h1>') // send the html to the browser when req is made from browser
}



app.get('/', standardExpressCallback);// route specific middle

app.use(errorHandler); // this should be placed at the very end

app.listen(3000);