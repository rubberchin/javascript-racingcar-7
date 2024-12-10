import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES, ERROR_MESSAGES } from "./Constants.js"

class InputView {
  async getCarEntries() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.ENTER_CAR_NAMES);
    this.isEmpty(input);
    return input;
  }

  async getHowManyRounds() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.ENTER_HOW_MANY_ROUNDS);
    this.isEmpty(input);
    this.isNumber(input);
    return input;
  }

  isEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  isNumber(input) {
    const regex = /^\d+$/;
    const isThisNumber = regex.test(input.trim())
    console.log(Number(input));
    if (!isThisNumber || Number(input) <= 0) {
      throw new Error(ERROR_MESSAGES.SHOULD_BE_NATURAL_NUMBER);
    }
  }
}

export default InputView;