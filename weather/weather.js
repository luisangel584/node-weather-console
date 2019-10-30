
const axios = require('axios');


const getWeather = async (lat, lng) => {
    //
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bdfa4ee4eac13a3a01fbbc751f393ecf&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getWeather
}