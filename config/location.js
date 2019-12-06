const axios = require('axios');

async function locationInfo( direction ) {

  let EDirection = encodeURI( direction );
  
  let instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${EDirection}`,
    headers: {'X-RapidApi-Key': 'c33db6b0ffmsh15bd658abb9a58cp1cd9e7jsn0e8b734f871e'}
  });
  
  let info = await instance.get()
    
  if( info.data.Results.length === 0){
    throw new Error(`Verifica la dirección: ${direction}, pues parece no haber respuesta por parte del servidor.`)
  }

  const data = info.data.Results[0];

  const location = data.name;
  const lat = data.lat;
  const lon = data.lon;

  return { location, lat, lon };

};

module.exports = { locationInfo };