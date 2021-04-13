const express = require('express');
const app = express();

//Radio info
var internetradio = require('node-internet-radio');

//Anime radio info
const WebSocket = require("ws")
let heartbeatInterval;
let ws;

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
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('english', { songInfo })

})

app.get('/english-lofi', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/2ewgr4q6bm8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('english-lofi', { songInfo })
    
})

app.get('/english-rap', async (req, res) => {

    let songInfo;
    let stream = "http://stream.zeno.fm/qsuwm5q4cm8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('english-rap', { songInfo })
})

app.get('/english-electro', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/0qdyq6m6kg8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('english-electro', { songInfo })

})

app.get('/hindi', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/suczg0k0um0uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('hindi', { songInfo })

})

app.get('/hindi-lofi', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/dkpfpt52yf8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('hindi-lofi', { songInfo })
})

app.get('/hindi-classics', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/x89p67r7hg8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('hindi-classics', { songInfo })
})

app.get('/gaming', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/u9a1vdc61k8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('gaming', { songInfo })
})

app.get('/study', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/vskuwucpdg8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('study', { songInfo })
})

app.get('/japanese', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/1qtx2umb7f8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('japanese', { songInfo })
})

app.get('/korean', async (req, res) => {


    let songInfo;
    let stream = "http://stream.zeno.fm/mxyv5hrm4f8uv";
    await internetradio.getStationInfo(stream, (error, station) => {
        if(error) {
            console.log(error);
            songInfo = "Problem getting song info from the server! Please stand by!"
        }
        if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
        else songInfo = station.title;
    })

    await setInterval(async() => {
        await internetradio.getStationInfo(stream, (error, station) => {
            if(error) {
                console.log(error);
                songInfo = "Problem getting song info from the server! Please stand by!"
            }
            if(station === undefined) songInfo = "Problem getting song info from the server! Please stand by!"
            else songInfo = station.title;
        })
    }, 65000)

    res.render('korean', { songInfo })
})

app.get('/anime', async (req, res) => {

    let songInfo;
      
      function connect() {
          
        ws = new WebSocket('wss://listen.moe/gateway_v2');
      
        ws.onopen = () => {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
        };
      
        ws.onmessage = message => {
            if (!message.data.length) return;
            let response;
            try {
                response = JSON.parse(message.data);
            } catch (error) {
                return;
            }
            switch (response.op) {
                case 0:
                    ws.send(JSON.stringify({ op: 9 }));
                    setInterval(() => {
                      ws.send(JSON.stringify({ op: 9 }));
                    }, response.d.heartbeat);
                    
                    break;
                case 1:
                    if (response.t !== 'TRACK_UPDATE' && response.t !== 'TRACK_UPDATE_REQUEST' && response.t !== 'QUEUE_UPDATE' && response.t !== 'NOTIFICATION') break;
                 
                    songInfo = `${response.d.song.title} - ${response.d.song.artists[0].name}`
                    
                    ws.close();
                    break;
      
                default:
                    break;
            }
        };
      }

      await connect();
    

    await setInterval(async() => {
        connect();
    }, 65000)

    res.render('anime', { songInfo })
})


app.use((req, res) => {
    res.status(404).render('404')
})