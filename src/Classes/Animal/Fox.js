import Animal from './Animal';
import Player from './Player';
import Plant from '../plants/Plant';
import Wolf from './Wolf';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';
import Wasp from './Wasp';
import Tortoise from './Tortoise';

export default class Fox extends Animal {
  constructor(grid, strength, initiative, x, y, icon) {
    super(grid, strength, initiative, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/a/ad/Fox.gif';
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
    if (
      organismToInteractWith instanceof Player ||
      organismToInteractWith instanceof Wolf ||
      organismToInteractWith instanceof Tortoise
    ) {
      return;
    } else if (organismToInteractWith instanceof Wasp) {
      if (giveWaspChanceToFlee()) {
        this.fight(organismToInteractWith);
      }
    } else if (organismToInteractWith instanceof Fox) {
      this.mate(organismToInteractWith);
    } else {
      this.fight(organismToInteractWith);
    }
  };

  produceNewSpeciesMember = (x, y) => {
    return new Fox(this.grid, 4, 7, x, y, this.icon);
  };
}
