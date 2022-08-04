import Plant from './Plant';

export default class BloodHerb extends Plant {
  constructor(grid, strength, initiative, x, y, chanceToSpread, icon) {
    super(grid, strength, initiative, x, y, chanceToSpread);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/d/d9/Blood_Herb.gif';
  }
  produceNewSpeciesMember = (x, y) => {
    return new BloodHerb(this.grid, 0, 0, x, y, 1, this.icon);
  };
}
