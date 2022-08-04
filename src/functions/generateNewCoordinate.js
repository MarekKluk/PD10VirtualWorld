import generateRandomNumber from './generateRandomNumber';
import Wasp from '../Classes/Animal/Wasp';
import Tortoise from '../Classes/Animal/Tortoise';

function willTortoiseMoveOrNot() {
  const randomNumber = generateRandomNumber(0, 3);
  return randomNumber > 2;
}

export default function generateNewCoordinate(organism) {
  if (organism instanceof Wasp) {
    return generateRandomNumber(-2, 2);
  } else if (organism instanceof Tortoise) {
    if (willTortoiseMoveOrNot()) {
      return generateRandomNumber(-1, 1);
    }
    return 0;
  }
  return generateRandomNumber(-1, 1);
}
