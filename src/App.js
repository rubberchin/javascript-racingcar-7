import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Race from "./Race.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { CAR, ERROR_MESSAGES } from "./Constants.js";


class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const carEntries = await inputView.getCarEntries();
    const carNames = carEntries.split(CAR.NAME_DELIMITER);
    this.validateCarNames(carNames);
   
    const cars = carNames.map(name => new Car(name));
    const rounds = await inputView.getHowManyRounds();
    const winners = new Race(cars, rounds, outputView)
    outputView.printWinners(winners);
  }

  validateCarNames(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.HAS_DUPLICATE_CAR_NAME);
    }
    if (carNames.filter(name => name === '').length > 0) {
      throw new Error(ERROR_MESSAGES.HAS_EMPTY_CAR_NAME);
    }
  }
}

export default App;
