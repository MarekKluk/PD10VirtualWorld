export function findEmptyFieldAroundOrganism(grid, x, y) {
  if (x + 1 <= 19 && grid[x + 1][y].currentOrganism === null) {
    return {
      x: x + 1,
      y,
    };
  } else if (x - 1 >= 0 && grid[x - 1][y].currentOrganism === null) {
    return {
      x: x - 1,
      y,
    };
  } else if (y + 1 <= 19 && grid[x][y + 1].currentOrganism === null) {
    return {
      x,
      y: y + 1,
    };
  } else if (y - 1 >= 0 && grid[x][y - 1].currentOrganism === null) {
    return {
      x,
      y: y - 1,
    };
  }
  return null;
}
