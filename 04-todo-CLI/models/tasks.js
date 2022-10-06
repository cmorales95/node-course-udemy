import "colors";
import Task from "./task.js";

export default class Tasks {
  #list = {};

  constructor() {
    this.#list = {};
  }

  newTask(description = "") {
    const task = new Task(description);
    this.#list[task.code] = task;
  }

  get all() {
    const tasks = [];
    Object.values(this.#list).forEach((value) => tasks.push(value));
    return tasks;
  }

  load(data = []) {
    data.forEach((task) => (this.#list[task.code] = task));
  }

  #formatPrintTask(task, i) {
    const id = `${i + 1}`.green;
    const { description, finishedAt } = task;
    const status = finishedAt ? `${finishedAt}`.green : "Pending".grey;

    console.log(`${id}. ${description} :: ${status}`);
  }

  printAll() {
    this.all.forEach((task, i) => this.#formatPrintTask(task, i));
  }

  filterDonePendingTasks(done = true) {
    let tasks = [];
    if (done) {
      tasks = this.all.filter((task) => task.finishedAt !== null);
    } else {
      tasks = this.all.filter((task) => task.finishedAt === null);
    }

    tasks.filter((task, i) => this.#formatPrintTask(task, i));
  }
}
