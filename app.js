const express = require('express');
const app = express();
const db = require('mongoose')
const { mongoURI } = require('./config')
const stats = require('./models/stats')

console.log(`Starting Server... `)
app.listen(3000)

try {
    db.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	});

	console.log('Connected to Data Base!');
    } catch(e) { console.log(e) }
console.log(`Done! Server listening at port 3000`);

var a;
var b;
var c;

setInterval(()=> {

    stats.findOne({},
		async (err, data) => {
			if (err) throw err;
			if (data) {

                a = data.GuildCount;
				b = data.ChannelCount;
                c = data.UserCount;
                //console.log(`\n============= Updated =============\nServerCount: ${a}\nChannelCount: ${b}\nUserCount: ${c}\n===================================\n`)

			} else if (!data) {
                console.log(`Stats Unavailable`)
                a = "Unavailable"
                b = "Unavailable"
                c = "Unavailable"
                console.log(`\n============= Updated =============\nServerCount: ${a}\nChannelCount: ${b}\nUserCount: ${c}\n===================================\n`)
			}
		},
	);
    console.log(`\n============= Updated =============\nServerCount: ${a}\nChannelCount: ${b}\nUserCount: ${c}\n===================================\n`)
  }, 10000)

  


app.set("view engine", "ejs");


app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { serverCount: a, channelCount: b, userCount: c})
})

app.get('/stats', (req, res) => {
    res.redirect('https://xenfm.ga/#stats')
})

app.use((req, res) => {
    res.status(404).render('404')
})