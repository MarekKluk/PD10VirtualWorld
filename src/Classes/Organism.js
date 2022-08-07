export default class Organism {
  constructor(grid, x, y) {
    this.grid = grid;
    this.x = x;
    this.y = y;
  }

  destroy = (organismToDestroy) => {
    const organismGrid = organismToDestroy.grid;
    const tile = organismGrid[organismToDestroy.x][organismToDestroy.y];
    tile.currentOrganism = null;
  };
}
