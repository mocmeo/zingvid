const cheerio = require('cheerio');
const axios = require('axios');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello world');
    });

    app.post('/', (req, res) => {
        const { link } = req.body;

        axios.get(link)
            .then(response => {
                let $ = cheerio.load(response.data);
                let video = $('.video-player').children();
                let title = $('.video-title').text();

                res.send({
                    title: title,
                    source: video.attr('src'),
                    download_link: video.attr('src')
                });
            })
            .catch(err => {
                console.log(err);
            })
    });

    app.get('/api', (req, res) => {
        res.send({"hi": "mocmeo"});
    });
}
