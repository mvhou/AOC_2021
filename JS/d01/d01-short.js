//d01
console.log((require('fs').readFileSync("1")+"").split`\n`.filter((a,b,c)=>a>+c[b-1]).length)

//d01-2
console.log((require('fs').readFileSync('1')+"").split`\n`.filter((a,b,c)=>a>+c[b-3]).length)