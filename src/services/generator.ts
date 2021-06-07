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

export default function (numberOfDigits: string) {
  while (true) {
    let num = String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
    if (num.length === Number(numberOfDigits)) {
      return num;
    }
    else console.log('Eror ', num )
  }
}