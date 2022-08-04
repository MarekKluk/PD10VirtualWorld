import Animal from './Animal';
import Plant from '../plants/Plant';
import Wasp from './Wasp';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';

export default class Sheep extends Animal {
  strength = 3;
  initiative = 4;
  constructor(grid, strength, initiative, x, y, icon) {
    super(grid, strength, initiative, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/2/2b/Sheep.gif';
  }

  interaction = (organismToInteractWith) => {
    if (organismToInteractWith instanceof Animal) {
      this.interactWithAnimal(organismToInteractWith);
    }
    if (organismToInteractWith instanceof Plant) {
      this.interactWithPlant(organismToInteractWith);
    }
  };

  interactWithAnimal = (organismToInteractWith) => {
    if (organismToInteractWith instanceof Wasp) {
      if (giveWaspChanceToFlee()) {
        this.fight(organismToInteractWith);
      }
    } else if (organismToInteractWith instanceof Sheep) {
      this.mate(organismToInteractWith);
    } else {
      this.fight(organismToInteractWith);
    }
  };

  produceNewSpeciesMember = (x, y) => {
    return new Sheep(this.grid, 3, 4, x, y, this.icon);
  };
}
