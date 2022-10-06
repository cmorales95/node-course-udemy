import "colors";
import Tasks from "./models/tasks.js";
import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import { readDB, saveDB } from "./helpers/saveFile.js";

console.clear();
const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const data = await readDB();

  if (data) {
    tasks.load(data);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1: // create task
        const description = await readInput("Description: ");
        tasks.newTask(description);
        saveDB(tasks.all);

        break;
      case 2:
        tasks.printAll();

        break;
      case 3:
        tasks.filterDonePendingTasks(true);

        break;
      case 4:
        tasks.filterDonePendingTasks(false);

        break;
    }

    await pause();
  } while (opt !== 0);
};

main();
