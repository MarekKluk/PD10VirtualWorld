import Plant from './Plant';

export default class Mandrake extends Plant {
  constructor(grid, strength, initiative, x, y, chanceToSpread, icon) {
    super(grid, strength, initiative, x, y, chanceToSpread);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/1/12/Mandrake.gif';
  }

  produceNewSpeciesMember = (x, y) => {
    return new Mandrake(this.grid, 0, 0, x, y, 3, this.icon);
  };
}
