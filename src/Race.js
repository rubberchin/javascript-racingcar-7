import { Random } from "@woowacourse/mission-utils";
import { CAR } from "./Constants.js";

class Race {
  cars;
  rounds;
  winners;
  outputView;

  constructor(cars, rounds, outputView) {  
    this.cars = cars;
    this.rounds = rounds;
    this.outputView = outputView;

    this.doRace(this.cars, this.rounds);
    this.determineWinners(this.cars);
    return this.winners;
  }

  determineWinners(cars) {
    const positions = cars.map(cars => cars.position);
    const maxMove = Math.max(...positions);

    this.winners = cars.filter(car => car.position === maxMove);
  }

  doRace(cars, rounds) {
    for(let r = 0; r < rounds; r++) {
      cars.map(car => this.determineMove(car))
      this.outputView.printProgress(cars);
    }
  }

  determineMove(car) {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= CAR.MINIMUM_FORWARDING_NUMBER) {
      car.position += CAR.STEP;
    }
  }
}

export default Race;