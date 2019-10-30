
const axios = require('axios');

const getPlace = async (direction) => {
    //
    const encodeUrl = encodeURI(direction);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': '33e07a8924msh1ff4df5b2b666c5p1fa696jsnf988cc8d1589'
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direction}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    }
}


module.exports = {
    getPlace
}
