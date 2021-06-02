export default function randomize(numberOfDigits: string) {
  return Math.trunc(Math.random() * 10 ** Number(numberOfDigits));
}
