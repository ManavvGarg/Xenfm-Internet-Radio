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

app.get('/stats', (req, res) => {
    res.redirect('https://xenfm.ga/#stats')
})

app.use((req, res) => {
    res.status(404).render('404')
})