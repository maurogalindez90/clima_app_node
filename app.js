const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatYLong(argv.direccion)
                .then((resp) => {
                    let mensaje = resp.primerMensaje;
                    clima.getClima(resp.data.lat, resp.data.lon)
                    .catch(err => console.log(err))
            .then((resp) => {
                console.log(mensaje += `${resp} grados centigrados`);
            })
            .catch(err => console.log(err));
                })



