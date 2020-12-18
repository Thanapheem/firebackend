const express = require('express');
const app = express();
const bodyParser=require("body-parser")   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json({type:"application/vnd.api+json"}))
// Server Port 8000
const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`SERVER RUNNING AT ${port}`)
})
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//--------------------------------------------//
    const { signup, login } = require('./Modules/User');
    
//--------------------------------------------//
// Manange User
      app.post('/signup',signup);
      app.post('/login',login);
      app.get('/get',(req,res) =>{
          res.json('hellwos')
      })

