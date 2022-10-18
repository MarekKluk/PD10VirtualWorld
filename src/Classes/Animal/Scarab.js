import Animal from './Animal';
import Plant from '../plants/Plant';
import Wasp from './Wasp';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';

export default class Scarab extends Animal {
  strength = 2;
  initiative = 1;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.x = x;
    this.y = y;
    this.icon = document.createElement('IMG');
    this.icon.src =
      'https://www.tibia-wiki.net/images/9/9a/Burrowing_Beetle.gif';
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
    } else if (organismToInteractWith instanceof Scarab) {
      this.mate(organismToInteractWith);
    } else {
      this.fight(organismToInteractWith);
    }
  };
  produceNewSpeciesMember = (x, y) => {
    return new Scarab(this.grid, x, y, this.icon);
  };
}
