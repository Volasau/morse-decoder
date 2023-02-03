const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  // console.log(arr);

  let result = "";
  let str = "";
  let arrMorse = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < 9; k += 2) {
      if (arr[i][k] + arr[i][k + 8] === "**") {
        str += " ";
      }
      if (arr[i][k] + arr[i][k + 1] === "10") {
        str += ".";
      }
      if (arr[i][k] + arr[i][k + 1] === "11") {
        str += "-";
      }
      if (arr[i][k] + arr[i][k + 1] === "00") {
        str += "";
      }
    }
    // console.log(str);
    arrMorse.push(str);
    str = "";
    // console.log(arrMorse);
  }
  arrMorse.forEach((el) => {
    if (el === " ") {
      result += " ";
    } else {
      result += MORSE_TABLE[el];
    }
  });

  return result;
}

module.exports = {
  decode,
};
