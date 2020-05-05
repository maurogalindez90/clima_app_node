const axios = require('axios');
const appid = `3fec470102357514960bdb1c6cb0807b`;

const  getClima = async (lat, lng) => {

    if(!lat || !lng) {
        throw new Error('Datos faltantes o invalidos para calcular clima');
    } else {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${appid}`);
    
    return resp.data.main.temp;
    }
}

module.exports = {
    getClima
}