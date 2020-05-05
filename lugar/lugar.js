const axios = require('axios');



const getLugarLatYLong = async (dir) => {
    if(!dir) throw new Error('La direccion es invalida');
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {'X-RapidAPI-Key': 'a3487ccc29mshb7e7aad2225cf49p1dc981jsnd9a9eceb9075'}
        });
        
        const resp = await instance.get();

        if(resp.data.Results.length === 0) {
            throw new Error (`No hay resultados para ${direccion}`);
        }

        const data = resp.data.Results[0];
        const direccion = data.name;
        const primerMensaje = `La temperatura en ${direccion} es de `;
    return {
        data,
        primerMensaje
    }
            
}

module.exports = {
    getLugarLatYLong
}