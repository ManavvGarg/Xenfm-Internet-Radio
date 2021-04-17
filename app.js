const express = require('express');
const app = express();
var useragent = require('express-useragent');
const mongoose = require("mongoose")
const radio = require("./models/radio")
const { mongoURI } = require("./config")
let sN;

//Radio info
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true, 
  keepAliveInitialDelay: 300000
}).then(async () => {
        console.log(`DB Connected.`);
         sN = await radio.findOne();

         setInterval(async() => {
           sN = await radio.findOne();
         }, 65000)
      });


console.log(sN)
//Anime radio info
const WebSocket = require("ws")
let heartbeatInterval;
let ws;

console.log(`Starting Server... `)
app.listen(3000)
console.log(`Done! Server listening at port 3000`);


  

app.set("view engine", "ejs");

app.use(useragent.express());
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bots arent allowed")
    }

    else if(agent.isMobile === true) {
        res.render("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render("index")
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")
});

app.get('/arc-sw.js', async(req, res) => {
  res.sendFile(__dirname + '/arc-sw.js')
})

app.get('/english', async (req, res) => {


  let songInfo = await sN.english;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('english', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

   // res.render('english', { songInfo })

})

app.get('/english-lofi', async (req, res) => {



  let songInfo = await sN.englishLofi;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('english-lofi', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('english-lofi', { songInfo })
    
})

app.get('/english-rap', async (req, res) => {



  let songInfo = await sN.englishRap;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('english-rap', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('english-rap', { songInfo })
})

app.get('/lil-peep', async (req, res) => {



    let songInfo = await sN.lilPeep;
  
  
      let agent = req.useragent;
  
      if(agent.isBot === true) {
          res.send("bot")
      }
  
      else if(agent.isMobile === true) {
          res.send("mobile")
      }
  
      else if(agent.isDesktop === true) {
          res.render('lil-peep', { songInfo })
      }
  
      else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")
  
      //res.render('english-rap', { songInfo })
  })

app.get('/english-electro', async (req, res) => {



  let songInfo = await sN.englishElectro;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('english-electro', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('english-electro', { songInfo })

})

app.get('/hindi', async (req, res) => {



  let songInfo = await sN.hindi;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('hindi', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('hindi', { songInfo })

})

app.get('/hindi-lofi', async (req, res) => {



  let songInfo = await sN.hindiLofi;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('hindi-lofi', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('hindi-lofi', { songInfo })
});

app.get('/hindi-lofi', async (req, res) => {



    let songInfo = await sN.hindiRap;
  
  
      let agent = req.useragent;
  
      if(agent.isBot === true) {
          res.send("bot")
      }
  
      else if(agent.isMobile === true) {
          res.send("mobile")
      }
  
      else if(agent.isDesktop === true) {
          res.render('hindi-rap', { songInfo })
      }
  
      else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")
  
      //res.render('hindi-lofi', { songInfo })
  })

app.get('/hindi-classics', async (req, res) => {



  let songInfo = await sN.hindiOld;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('hindi-classics', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('hindi-classics', { songInfo })
})

app.get('/gaming', async (req, res) => {




  let songInfo = await sN.gaming;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('gaming', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('gaming', { songInfo })
})

app.get('/study', async (req, res) => {



  let songInfo = await sN.study;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('study', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

   // res.render('study', { songInfo })
})

app.get('/copyright-free', async (req, res) => {



  let songInfo = await sN.dmca;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('DMCA', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

   // res.render('study', { songInfo })
})

app.get('/japanese', async (req, res) => {



  let songInfo = await sN.japanese;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('japanese', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

   // res.render('japanese', { songInfo })
})

app.get('/korean', async (req, res) => {



  let songInfo = await sN.korean;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('korean', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('korean', { songInfo })
})

app.get('/punjabi', async (req, res) => {



  let songInfo = await sN.punjabi;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('punjabi', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('korean', { songInfo })
})

app.get('/anime', async (req, res) => {

   let songInfo = await sN.anime;


    let agent = req.useragent;

    if(agent.isBot === true) {
        res.send("bot")
    }

    else if(agent.isMobile === true) {
        res.send("mobile")
    }

    else if(agent.isDesktop === true) {
        res.render('anime', { songInfo })
    }

    else res.send("Server Side UserAgent Couldnt Detect which type of browser you are on. PROCESS FAILED: EXIT...")

    //res.render('anime', { songName })
})


app.use((req, res) => {
    res.status(404).render('404')
})