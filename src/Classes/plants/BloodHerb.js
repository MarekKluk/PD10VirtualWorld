import Plant from './Plant';

export default class BloodHerb extends Plant {
  strength = 0;
  initiative = 0;
  chanceToSpread = 1;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/d/d9/Blood_Herb.gif';
  }
  produceNewSpeciesMember = (x, y) => {
    return new BloodHerb(this.grid, x, y, this.icon);
  };
}
