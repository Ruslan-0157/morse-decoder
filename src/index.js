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

//10 . , 11 -
// length = 10
//* space

function decode(expr) {
  let word = "";
  for (let i = 0; i < expr.length; i += 10) {
    let shifrBokvi = [];
    const tenDigits = expr.slice(i, i + 10);
    if (tenDigits.includes("*")) shifrBokvi.push("");
    else {
      const tmpStr = Number(tenDigits).toString();
      for (let j = 0; j < tmpStr.length; j += 2) {
        const twoDigits = tmpStr.slice(j, j + 2);
        if (twoDigits === "10") shifrBokvi.push(".");
        else if (twoDigits === "11") shifrBokvi.push("-");
      }
    }
    word += MORSE_TABLE[shifrBokvi.join("")] || " ";
  }
  return word;
}

module.exports = {
  decode,
};
