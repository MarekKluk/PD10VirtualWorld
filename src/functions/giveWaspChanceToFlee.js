import generateRandomNumber from './generateRandomNumber';

export default function giveWaspChanceToFlee() {
  const randomNumber = generateRandomNumber(0, 1);
  return randomNumber < 1;
}
