const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registrarse', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/ingresar', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});