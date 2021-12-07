import reader from '../readFile.js'

//d01
console.log((reader.getLines("d01").filter((a,b,c)=>a>+c[b-1]).length))

//d01-2
console.log((reader.getLines("d01").filter((a,b,c)=>a>+c[b-3]).length))