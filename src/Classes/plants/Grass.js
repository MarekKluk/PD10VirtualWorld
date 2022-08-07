import Plant from './Plant';

export default class Grass extends Plant {
  strength = 0;
  initiative = 0;
  chanceToSpread = 1;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/8/86/Goat_Grass.gif';
  }
  produceNewSpeciesMember = (x, y) => {
    return new Grass(this.grid, x, y, this.icon);
  };
}
