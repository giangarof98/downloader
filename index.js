require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path')
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
});

app.post('/', (req, res) => {
    
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`connected on port: ${port}`)
})