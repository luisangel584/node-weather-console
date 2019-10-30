/**
 *      Requieres
 */
const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Direccion de la ciudad',
        demand: true
    }
})
.argv;

/**
 *      Functions
 */

// place.getPlace(argv.direccion)
//         .then(console.log);

// weather.getWeather(20.521944, -86.929169)
//         .then(console.log)
//         .catch(console.log);

const getInfo = async (direction) => {

    try {
        const dataPlace = await place.getPlace(direction);
        const temp = await weather.getWeather(dataPlace.lat, dataPlace.lng);

        return `La temperatura actual de ${dataPlace.name} es de ${temp} grados`
    } catch (e) {
        return `No se pudo determinar el clima de ${direction}`
    }

    // const dplace = await place.getPlace(direct)
    //         .then(data => {
    //             weather.getWeather(data.lat, data.lng)
    //                     .then(wdata => console.log(`El clima para ${data.name} es de ${wdata} grados`))
    //                     .catch(console.log);
    //         })
    //         .catch(`No se pudo determinar el clima de ${direct}`);
}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);