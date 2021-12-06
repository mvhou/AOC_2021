import reader from '../readFile.js'

// const input = reader.getTestLines("d03")
let input = reader.getLines("d03")
const width = input[0].length;

const countOccurence = (acc, bit) => ((bit==true) ? acc+1 : acc-1)

const g = parseInt(Array(width)
          .fill(0)
          .map((_,i) => input.reduce((acc, str) => countOccurence(acc, str[i]), 0))
          .map(x => (x > 0) ? '1' : '0')
          .join(''), 2);

const e = g ^ ~(~0 << width)
console.log(`part1 = ${g * e}`)