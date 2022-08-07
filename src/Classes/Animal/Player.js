import Animal from './Animal';
import Plant from '../plants/Plant';
import Wasp from './Wasp';
import giveWaspChanceToFlee from '../../functions/giveWaspChanceToFlee';

export default class Player extends Animal {
  x = Math.floor(Math.random() * 19);
  y = Math.floor(Math.random() * 19);
  strength = 5;
  initiative = 4;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png';
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
    } else {
      this.fight(organismToInteractWith);
    }
  };
}
