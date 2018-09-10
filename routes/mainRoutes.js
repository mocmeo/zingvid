import axios from 'axios';
import cheerio from 'cheerio';

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
                    source: video.attr('src')
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
