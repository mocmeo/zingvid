module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello world');
    });

    app.get('/api', (req, res) => {
        res.send({"hi": "mocmeo"});
    });
}