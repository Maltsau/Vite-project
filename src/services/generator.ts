// export default function randomize(numberOfDigits: string) {
//   return String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
// }

// export default function randomize(numberOfDigits: string) {
//   let stringLength = String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
//   if (stringLength.length === Number(numberOfDigits)){
//     console.log (stringLength)
//     return stringLength;
//   }
//   else (console.log ("Ошибка"+ stringLength))
// }

function randomNumberBetween(min: number, max: number) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.round(randomNum);
}

export default function (numberOfDigits: string) {
  // calculate min and max
  const random = randomNumberBetween(1_000_000, 9_999_999);
  return String(random);
  // while (true) {
  //   let num = String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
  //   if (num.length === Number(numberOfDigits)) {
  //     return num;
  //   } else console.log("Eror ", num);
  // }
}
