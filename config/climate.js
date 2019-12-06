const axios = require('axios');

const appId = '309d987e6fa35eedf1336835be2fec2f';

async function climateInfo( lat, lon ) {

    let info = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`);

    return info.data.main;

}

module.exports = { climateInfo } 