const ref = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
  // split string into segments 10 characters
  const arrTenSymbols = expr.match(/.{10}/g)
  // remove 0 from start of string
  const arrDeleteZeros = arrTenSymbols.map(el => el.replace(/^0+/, ''));
  // replace code to letters 
  const arrLetters = arrDeleteZeros
       .map(el => el.match(/.{2}/g)
       .map(letter => letter
            .replace(/11/, '-')
            .replace(/10/, '.')
            .replace(/^\*{10}/, ' '))
            .join(''));
  const res = arrLetters.map(b => ref[b]).join('');
  return res;
}

module.exports = {
    decode
}