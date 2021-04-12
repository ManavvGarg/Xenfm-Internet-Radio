const express = require('express');
const app = express();
//Radio info
var internetradio = require('node-internet-radio');
console.log(`Starting Server... `)
app.listen(3000)
console.log(`Done! Server listening at port 3000`);
  

app.set("view engine", "ejs");


app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/english', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/22zbngr6bm8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            songInfo = station.title;
        })
    }, 7500)

    res.render('english', { songInfo })

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