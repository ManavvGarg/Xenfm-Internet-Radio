const express = require('express');
const app = express();

console.log(`Starting Server... `)
app.listen(3000)
console.log(`Done! Server listening at port 3000`);
  

app.set("view engine", "ejs");


app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/english', (req, res) => {
    res.render('english')
})

app.get('/english-lofi', (req, res) => {
    res.render('player/views/english-lofi')
})

app.get('/engish-rap', (req, res) => {
    res.render('player/views/english-rap')
})

app.get('/english-electro', (req, res) => {
    res.render('player/views/english-electro')
})

app.get('/hindi', (req, res) => {
    res.render('player/views/hindi')
})

app.get('/hindi-lofi', (req, res) => {
    res.render('player/views/hindi-lofi')
})

app.get('/hindi-classics', (req, res) => {
    res.render('player/views/hindi-classics')
})

app.get('/gaming', (req, res) => {
    res.render('player/views/gaming')
})

app.get('/study', (req, res) => {
    res.render('player/views/study')
})

app.get('/japanese', (req, res) => {
    res.render('player/views/japanese')
})

app.get('/korean', (req, res) => {
    res.render('player/views/korean')
})

app.get('/anime', (req, res) => {
    res.render('player/views/anime')
})


app.use((req, res) => {
    res.status(404).render('404')
})