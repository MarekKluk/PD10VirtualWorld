import Plant from './Plant';

export default class Mandrake extends Plant {
  strength = 0;
  initiative = 0;
  chanceToSpread = 3;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/1/12/Mandrake.gif';
  }

  produceNewSpeciesMember = (x, y) => {
    return new Mandrake(this.grid, x, y, this.icon);
  };
}
