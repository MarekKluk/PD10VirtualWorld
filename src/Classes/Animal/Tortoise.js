import Animal from './Animal';
import Plant from '../plants/Plant';
import Wasp from './Wasp';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';

export default class Tortoise extends Animal {
  strength = 2;
  initiative = 1;
  constructor(grid, strength, initiative, x, y, icon) {
    super(grid, strength, initiative, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/5/5c/Tortoise.gif';
  }
  interaction = (organismToInteractWith) => {
    if (organismToInteractWith instanceof Animal) {
      this.interactWithAnimal(organismToInteractWith);
    } else if (organismToInteractWith instanceof Plant) {
      this.interactWithPlant(organismToInteractWith);
    }
  };
  interactWithAnimal = (organismToInteractWith) => {
    if (organismToInteractWith instanceof Wasp) {
      if (giveWaspChanceToFlee()) {
        this.fight(organismToInteractWith);
      }
    } else if (organismToInteractWith instanceof Tortoise) {
      this.mate(organismToInteractWith);
    } else {
      this.fight(organismToInteractWith);
    }
  };
  produceNewSpeciesMember = (x, y) => {
    return new Tortoise(this.grid, 2, 1, x, y, this.icon);
  };
}
