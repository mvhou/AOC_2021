import reader from '../readFile.js'

// let input = reader.getLines("d05")
let input = reader.getTestLines("d05").map(a => a.split(' -> ')).map(([a,b]) => [a.split(',').map(x=>+x), b.split(',').map(x=>+x)])
const width = input.flat().reduce((acc, [x,_]) => (x > acc) ? x : acc,0)
const height = input.flat().reduce((acc, [_,y]) => (y > acc) ? y : acc,0)


const Map = Array(height+1).fill(Array(width+1).fill(0))

console.log(input)
console.log(Map)

let count = 0
input.forEach((c, i) => {
  let x1 = c[0][0]
  let x2 = c[1][0]
  let y1 = c[0][1]
  let y2 = c[1][1]
  let xmod = (x2 > x1) ? 1 : -1;
  let ymod = (y2 > y1) ? 1 : -1;
  console.log(x1,x2,xmod)
  console.log(y1,y2.ymod)
  console.log(input[i])
  if (x1 == x2) {
    for (let y = y1; y < y2; y+=ymod) {
      Map[y][x1]++;
      console.log(Map[y][x1])
    }
  }
  if (y1 == y2) {
    for (let x = x1; x < x2; x+=xmod) {
      Map[y1][x]++;
      console.log(Map[y1][x])
    }
  }
  console.log(Map)
})

console.log(input)
console.log(Map.map(x => x.join()))
