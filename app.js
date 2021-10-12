const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('public'));

app.listen(process.env.PORT || 3030, () => {
    console.log("Bien ahí");
}); 

app.get('/', (req, res) => {
    const archivo = path.join(__dirname, './views/home.html')
    res.sendFile(archivo);
});

app.get('/register', (req, res) => {
    const archivo = path.join(__dirname, './views/register.html')
    res.sendFile(archivo);
});

app.post('/register', (req, res) => {
    req.body;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    const archivo = path.join(__dirname, './views/login.html')
    res.sendFile(archivo);
});

