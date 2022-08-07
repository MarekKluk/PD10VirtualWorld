import { findEmptyFieldAroundOrganism } from '../../functions/findEmptyFieldAroundTheOrganism';
import Organism from '../Organism';
import generateRandomNumber from '../../functions/generateRandomNumber';

function randomizeIfPlantWillSpread(plantToSpread) {
  const randomNumber = generateRandomNumber(1, 10);
  if (plantToSpread.chanceToSpread === 3) {
    return randomNumber <= 3;
  }
  return randomNumber <= 1;
}

export default class Plant extends Organism {
  constructor(grid, x, y) {
    super(grid, x, y);
  }
  spread = () => {
    if (randomizeIfPlantWillSpread(this)) {
      const emptyFieldAroundOrganism = findEmptyFieldAroundOrganism(
        this.grid,
        this.x,
        this.y,
      );
      if (!emptyFieldAroundOrganism) {
        return;
      }
      this.grid[emptyFieldAroundOrganism.x][
        emptyFieldAroundOrganism.y
      ].currentOrganism = this.produceNewSpeciesMember(
        emptyFieldAroundOrganism.x,
        emptyFieldAroundOrganism.y,
      );
    }
  };
}
