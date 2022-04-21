const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, ()=>{
    console.log ('Puerto escuchando')
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+"/views/home.html"))
  });

app.use(express.static( 'public'));

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/registro.html'))
})

app.get('/login',(req, res)=>{
  res.sendFile(path.join(__dirname,'/views/login.html'))
})

