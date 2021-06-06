export default function randomize(numberOfDigits: string) {
  let stringLength = String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
  if (stringLength.length === Number(numberOfDigits)){
    return stringLength}
  else {randomize (numberOfDigits);}
  ;}
