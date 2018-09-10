const axios = require('axios');

const serverURL = 'http://zingvid.herokuapp.com/';
const link = 'https://news.zing.vn/video-singapore-chuan-bi-don-trung-thu-voi-den-long-rong-phuong-ruc-ro-post873952.html';

const getLink = async () => {
    let res = await axios.post(serverURL, { link });
    console.log(res);
}

getLink();