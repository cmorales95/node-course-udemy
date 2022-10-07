import Tasks from "./models/tasks.js";
import {
  inquirerMenu,
  chooseTaskToDelete,
  pause,
  readInput,
  confirm,
  chooseTasksChecked,
} from "./helpers/inquirer.js";
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

      case 5:
        const ids = await chooseTasksChecked(tasks.all);
        tasks.toggle(ids);
        console.log('tasks have been updated')

        break;
      case 6:
        const id = await chooseTaskToDelete(tasks.all);
        if (id === 0) {
          continue;
        }

        const ok = await confirm("Are you sure?");
        if (ok) {
          tasks.deleteTask(id);
          console.log("Task has been deleted");
        }

        break;
    }

    saveDB(tasks.all);

    await pause();
  } while (opt !== 7);
};

main();
