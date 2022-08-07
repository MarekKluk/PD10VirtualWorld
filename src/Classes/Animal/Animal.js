import Organism from '../Organism';
import { findEmptyFieldAroundOrganism } from '../../functions/findEmptyFieldAroundTheOrganism';
import HolyOrchid from '../plants/HolyOrchid';
import BloodHerb from '../plants/BloodHerb';

export default class Animal extends Organism {
  constructor(grid, x, y) {
    super(grid, x, y);
  }

  fight = (organismToFightWith) => {
    if (this.strength > organismToFightWith.strength) {
      this.destroy(organismToFightWith);
    } else if (this.strength < organismToFightWith.strength) {
      this.destroy(this);
    }
  };

  interactWithPlant = (plantToEat) => {
    if (plantToEat instanceof HolyOrchid) {
      this.strength += 3;
    } else if (plantToEat instanceof BloodHerb) {
      this.destroy(this);
      this.destroy(plantToEat);
    }
    this.destroy(plantToEat);
  };

  produceNewSpeciesMember = (x, y) => {};
  mate = (organismToMateWith) => {
    const emptyFieldAroundThisOrganism = findEmptyFieldAroundOrganism(
      this.grid,
      this.x,
      this.y,
    );
    const emptyFieldAroundOrganismToMateWith = findEmptyFieldAroundOrganism(
      this.grid,
      organismToMateWith.x,
      organismToMateWith.y,
    );

    if (!emptyFieldAroundThisOrganism && !emptyFieldAroundOrganismToMateWith) {
      return;
    }
    if (emptyFieldAroundThisOrganism) {
      this.grid[emptyFieldAroundThisOrganism.x][
        emptyFieldAroundThisOrganism.y
      ].currentOrganism = this.produceNewSpeciesMember(
        emptyFieldAroundThisOrganism.x,
        emptyFieldAroundThisOrganism.y,
      );
    } else if (emptyFieldAroundOrganismToMateWith) {
      this.grid[emptyFieldAroundOrganismToMateWith.x][
        emptyFieldAroundOrganismToMateWith.y
      ].currentOrganism = organismToMateWith.produceNewSpeciesMember(
        emptyFieldAroundOrganismToMateWith.x,
        emptyFieldAroundOrganismToMateWith.y,
      );
    }
  };
}
