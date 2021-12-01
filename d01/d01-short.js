//d01
console.log('p1 '+(require('fs').readFileSync('1')+"").split('\n').filter((a,b,c)=>a>c[b-1]/1).length)

//d01-2
console.log('p2 '+(require('fs').readFileSync('1')+"").split('\n').filter((a,b,c)=>a>c[b-3]/1).length)