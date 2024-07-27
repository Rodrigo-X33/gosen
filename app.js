const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/servicios', (req, res)=>{
    res.sendFile(__dirname + '/servicios.html');
})
app.get('/contacto', (req, res)=>{
    res.sendFile(__dirname + '/contact.html');
})
app.listen(process.env.PORT || 3000, ()=>console.log('Server ready on port 3001.'))