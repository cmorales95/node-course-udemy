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
        const places = await searches.city(index);
        const id = await printPlaces(places);
        const selectedPlace = places.find((place) => place.id === id); // returns only one

        break;
      case 2:
        break;
    }

    if (opt !== 3) await pause();
  } while (opt !== 3);
};

main();
