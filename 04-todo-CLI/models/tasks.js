import Task from './task.js';

export default class Tasks {
  #list = {};

  constructor() {
    this.#list = {};
  }

  createTask( description = '' ) {
    const task = new Task( description );
    this.#list[task.code] = task;
  }

  get list() {
    return this.#list;
  }
}