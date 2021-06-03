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
    const number = numbers[i];
    const mp3 = NUMBER_MAP[number];
    if (mp3) {
      var audio = new Audio(mp3);
      audio.play();
      await wait(Number(delay)*1000);
    }
  }
}
