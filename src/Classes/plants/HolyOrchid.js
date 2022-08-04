import Plant from './Plant';

export default class HolyOrchid extends Plant {
  constructor(grid, strength, initiative, x, y, chanceToSpread, icon) {
    super(grid, strength, initiative, x, y, chanceToSpread);
    this.icon = document.createElement('IMG');
    this.icon.src = 'https://www.tibia-wiki.net/images/c/cb/Holy_Orchid.gif';
  }

  produceNewSpeciesMember = (x, y) => {
    return new HolyOrchid(this.grid, 0, 0, x, y, 1, this.icon);
  };
}
