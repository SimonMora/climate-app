const argv = require('./config/yargs').argv;
const location = require('./config/location');
const climate = require('./config/climate');


async function getClimate( direction ) {
   
    const locationInfo = await location.locationInfo( direction )
                                .catch(err => console.log(err)); 


    if(!locationInfo){
        throw new Error(`We couldn't find any city with the name: ${argv.direction}` );
    }

    const climateInfo = await climate.climateInfo( locationInfo.lat, locationInfo.lon )
                                .catch(err=> console.log(err));

    if(!climateInfo){
        throw new Error(`we couldn't find any climate for these latitudes: ${locationInfo.lat} y ${locationInfo.lon}`);
    }

    let temperature = climateInfo.temp; 
    let city = locationInfo.location;

           return { temperature, city }                     
}


getClimate(argv.direction).then( res => {
    console.log(`The climate temperature for ${res.city} is ${res.temperature}.`);
}).catch(console.log);





