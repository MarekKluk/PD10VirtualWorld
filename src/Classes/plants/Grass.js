import Plant from './Plant';

export default class Grass extends Plant {
  constructor(grid, strength, initiative, x, y, chanceToSpread, icon) {
    super(grid, strength, initiative, x, y, chanceToSpread);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/8/86/Goat_Grass.gif';
  }
  produceNewSpeciesMember = (x, y) => {
    return new Grass(this.grid, 0, 0, x, y, 1, this.icon);
  };
}
