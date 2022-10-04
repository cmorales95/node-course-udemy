import 'colors';
import Tasks from './models/tasks.js';
import { inquirerMenu, pause, readInpunt } from './helpers/inquirer.js';

console.clear();
const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();
    switch ( opt ) {
      case 1: // create task
        const description = await readInpunt( 'Description: ' );
        tasks.createTask(description)
        break;
      case 2:
        console.log(tasks.list)
        break;
    }

    await pause();
  } while ( opt !== 0 );
};

main();