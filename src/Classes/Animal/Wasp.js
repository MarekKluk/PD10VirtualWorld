import Animal from './Animal';
import Plant from '../plants/Plant';
import Scarab from './Scarab';

export default class Wasp extends Animal {
  strength = 4;
  initiative = 4;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
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
    } else if (organismToInteractWith instanceof Scarab) {
      return;
    }
    this.fight(organismToInteractWith);
  };

  produceNewSpeciesMember = (x, y) => {
    return new Wasp(this.grid, x, y, this.icon);
  };
}
