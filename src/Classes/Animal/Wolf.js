import Animal from './Animal';
import Plant from '../plants/Plant';
import Wasp from './Wasp';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';

export default class Wolf extends Animal {
  strength = 9;
  initiative = 5;
  constructor(grid, strength, initiative, x, y, icon) {
    super(grid, strength, initiative, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/8/82/Wolf.gif';
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
    } else if (organismToInteractWith instanceof Wolf) {
      this.mate(organismToInteractWith);
    } else {
      this.fight(organismToInteractWith);
    }
  };

  produceNewSpeciesMember = (x, y) => {
    return new Wolf(this.grid, 9, 5, x, y, this.icon);
  };
}
