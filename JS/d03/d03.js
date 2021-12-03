import reader from '../readFile.js'

let input = reader.getLines("d03")

const measureOccurence = ([g, e], bit) => (bit) ? [g+1, e-1] : [g-1, e+1];

console.log(input.reduce(([gamma, epsilon], value) => measureOccurence()),[0,0]);