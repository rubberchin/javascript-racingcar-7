import { ERROR_MESSAGES } from "./Constants.js";

class Car {
  name;
  position;

  constructor(name, position = 0) {
    this.name = name;
    this.position = position;
    this.#validateCarName(this.name);
  }

  #validateCarName(name) {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_LIMIT);
    }
  }
}

export default Car;