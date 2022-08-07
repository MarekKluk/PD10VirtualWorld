import Plant from './Plant';

export default class HolyOrchid extends Plant {
  strength = 0;
  initiative = 0;
  chanceToSpread = 1;
  constructor(grid, x, y, icon) {
    super(grid, x, y);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/c/cb/Holy_Orchid.gif';
  }

  produceNewSpeciesMember = (x, y) => {
    return new HolyOrchid(this.grid, x, y, this.icon);
  };
}
