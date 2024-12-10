import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printProgress(cars) {
    cars.map(car => {
      const name = car.name;
      const moves = '-'.repeat(car.position);
      Console.print(`${name} : ${moves}`);
    });
    Console.print('\n');
  }
  
  printWinners(winners) {
    const winnerNames = winners.map(winner => winner.name).join(',');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default OutputView;