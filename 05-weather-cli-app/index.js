import 'colors';
import * as dotenv from 'dotenv';

import {
  inquirerMenu,
  pause,
  printPlaces,
  readInput,
} from './helpers/inquirer.js';
import Searches from './models/searches.js';

dotenv.config();

const main = async () => {
  const searches = new Searches();
  let opt = '';

  do {
    opt = await inquirerMenu('Description: ');
    switch (opt) {
      case 1:
        const index = await readInput('Search city: ');
        const places = await searches.searchPlacesByKeyword(index);
        const id = await printPlaces(places);
        if (id === 0) continue;

        const selectedPlace = places.find((place) => place.id === id); // returns only one
        searches.addPlaceRecord(selectedPlace.name);

        const weather = await searches.weatherByCoordinates(
          selectedPlace.lat,
          selectedPlace.lon
        );

        console.log('\nInformation about the place:\n');
        console.log('City: ', selectedPlace.name);
        console.log('Lat:', selectedPlace.lat);
        console.log('Lon:', selectedPlace.lon);
        console.log('Temperature:', weather.temperature);
        console.log('Min:', weather.min);
        console.log('Max:', weather.max);
        console.log('About the weather:', weather.description);

        break;
      case 2:
        searches.placesRecord.forEach((place, i) => {
          const id = `${i + 1}`.green;
          console.log(`${id} ${place}`);
        });
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
