import reader from '../readFile.js'

let input = reader.getTestLines("d03")
// let input = reader.getLines("d03")

const countOccurence = (g, bit) => ((bit==true) ? g+1 : g-1)
let g = Array(input[0].length).fill(0).map((x,i) => x = input.reduce((acc, str) => countOccurence(acc, str[i]), 0)).map(x => (x > 0) ? '1' : '0').join('');
console.log(g)




// const g = parseInt(occurences.reduce((acc,x)=> (x > 0) ? acc + '1' : acc + '0', ''), 2);
// const e = g ^ ~(~0 << 5)
// console.log(e * g)
// console.log(occurences.map(x => (x[0] > 1) ? ['1','0']  : ['0','1']))
// console.log(g);
// console.log(e);
// input = ['1', '1', '0', '1', '1', '0']
// let aap = [0,0]
// input.forEach(value => {
//     aap = measureOccurence(aap, value[0])
// })
// // let aap = measureOccurence([0,0], '1')
// console.log(aap)
// console.log('1' == true)
// console.log('0' == false)
