[a,b]=(require('fs').readFileSync("2")+"").split`\n`.map(x=>x.split(' ')).reduce(([a,b],[c,i])=>(c<'f')?[a,b+i/1]:(c<'u')?[a+i/1,b]:[a,b-i/1],[0,0])
console.log(a*b)