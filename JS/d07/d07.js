import reader from '../readFile.js'
import mark from '../markModule.js'

const input = reader.getLinesBy("d07", ',').map(x => +x);

const median = mark.median(input);
const mean = Math.round(mark.mean(input, false) - 0.25); //this is bs, how make better?

const part1 = (arr) => arr.reduce((acc, x) => acc + Math.abs(median - x), 0)
const part2 = (arr) => arr.reduce((acc, x) => acc + mark.sum(mark.newArray(1, Math.abs(mean - x))) ,0)

console.log("part 1 =", part1(input));
console.log("part 2 =", part2(input));