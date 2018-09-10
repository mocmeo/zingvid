const express = require('express');
const bodyParser= require('body-parser');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

// Server configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes/mainRoutes')(app);

const link = 'https://news.zing.vn/video-singapore-chuan-bi-don-trung-thu-voi-den-long-rong-phuong-ruc-ro-post873952.html';
const getLink = async () => {
    const res = await axios.get(link);
    var $ = cheerio.load(res.data);
    const video = $('.video-player').children();
    var title = $('.video-title').text();

    console.log(video.attr('src'));
    console.log(title);
}

getLink();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}1!`);
});
