const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "-"];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random()* (max-min+1));
}

const arrayofArrays = [letters, numbers, symbols];
let passwordLength = 10;


for (const i=0; i< passwordLength; i++) {
  const myArr = arrayofArrays[getRandomNumber(0, arrayofArrays.length-1)];
}

