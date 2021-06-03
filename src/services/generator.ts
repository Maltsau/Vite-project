export default function randomize(numberOfDigits: string) {
  return String(Math.trunc(Math.random() * 10 ** Number(numberOfDigits)));
}
