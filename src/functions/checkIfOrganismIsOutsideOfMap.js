export default function checkIfOrganismIsOutsideOfMap(
  newX,
  currentX,
  newY,
  currentY,
) {
  if (newX > 19 || newX < 0) {
    newX = currentX;
  }
  if (newY > 19 || newY < 0) {
    newY = currentY;
  }
  return {
    newX,
    newY,
  };
}
