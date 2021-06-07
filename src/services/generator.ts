
function randomNumberBetween(min: number, max: number) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
}

export default function (numberOfDigits: string) {
  const random = randomNumberBetween(10**(Number(numberOfDigits)-1), 10**Number(numberOfDigits)-1); 
  return String(random);
}
