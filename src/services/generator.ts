import {numberOfDigits} from '../components/lengthSelector'


export default function randomize() {
    return (Math.trunc(Math.random()*10**Number(numberOfDigits)))
  };