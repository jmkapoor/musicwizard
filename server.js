var express = require('express');
var app = express();
const bodyParser  = require('body-parser');
const axios = require('axios');
app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render("pages/index.ejs", {});
});

//post call for user input
app.post('/process_form', function(req, res){
    var artist = req.body.artist;
    var url = 'https://itunes.apple.com/search?term=' + artist;
    axios.get(url)
        .then((response)=>{
            let myArtistArray = response.data.results;
            info = myArtistArray.slice(0,10)
            // let check = 0;
            // if (req.body.album == 'on')
            // check = 1;
            res.render('pages/index.ejs', {
                info: info,
                //check: check
            });
        });
  })

app.listen(8080);
console.log('8080 is the magic port');

