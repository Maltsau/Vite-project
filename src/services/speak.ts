import one from "../assets/1.mp3";
import two from "../assets/2.mp3";
import three from "../assets/3.mp3";
import four from "../assets/4.mp3";
import five from "../assets/5.mp3";
import six from "../assets/6.mp3";
import seven from "../assets/7.mp3";
import eight from "../assets/8.mp3";
import nine from "../assets/9.mp3";
import zero from "../assets/0.mp3";
import er from "../assets/error.mp3"


function wait(ms: number) {
  return new Promise<void>(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const NUMBER_MAP = {
  "1": one,
  "2": two,
  "3": three,
  "4": four,
  "5": five,
  "6": six,
  "7": seven,
  "8": eight,
  "9": nine,
  "0": zero
} as Record<string, string>;

export default async function (number: string, delay: string) {
  const numbers = [...number];
  for (let i = 0; i < numbers.length; i++) {
    const number = {
      value: numbers[i],
      isHighlighted: false
    };
    const mp3 = NUMBER_MAP[number.value];
    if (mp3) {
      let audio = new Audio(mp3);
      audio.play();
      number.isHighlighted = true;
      await wait(Number(delay)*1000);}
    else {
      let audio = new Audio(er);
      audio.play();
    }
  }
}
