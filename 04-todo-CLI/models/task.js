import { v4 as uuidv4 } from 'uuid';

export default class Task {
  #code = '';
  description = '';
  finishedAt = null;

  constructor( description ) {
    this.#code = uuidv4();
    this.description = description;
  }

  get code() {
    return this.#code;
  }
}