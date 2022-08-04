export default class Organism {
  constructor(grid, strength, initiative, x, y) {
    this.grid = grid;
    this.strength = strength;
    this.initiative = initiative;
    this.x = x;
    this.y = y;
  }

  destroy = (organismToDestroy) => {
    const organismGrid = organismToDestroy.grid;
    const tile = organismGrid[organismToDestroy.x][organismToDestroy.y];
    tile.currentOrganism = null;
  };
}
