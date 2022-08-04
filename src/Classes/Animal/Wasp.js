import Animal from './Animal';
import Plant from '../plants/Plant';
import Tortoise from './Tortoise';

export default class Wasp extends Animal {
  constructor(grid, strength, initiative, x, y, icon) {
    super(grid, strength, initiative, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/d/d7/Wasp.gif';
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
      this.mate(organismToInteractWith);
      return;
    } else if (organismToInteractWith instanceof Tortoise) {
      return;
    }
    this.fight(organismToInteractWith);
  };

  produceNewSpeciesMember = (x, y) => {
    return new Wasp(this.grid, 4, 4, x, y, this.icon);
  };
}
