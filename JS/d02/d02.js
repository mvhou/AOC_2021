const fs = require('fs')

let subPos = {
    'horizontal': 0,
    'depth': 0,
    'aim': 0
  }

let input = fs.readFileSync("2").toString().split('\n').map(x => [x.split(' ')[0], parseInt(x.split(' ')[1])]).forEach((x) => {
if (x[0] == 'forward') {
    subPos.horizontal += x[1];
    subPos.depth += subPos.aim * x[1];
} else if (x[0] == 'up') {
    // subPos.depth -= x[1];
    subPos.aim -= x[1];
} else if (x[0] == 'down') {
    // subPos.depth += x[1];
    subPos.aim += x[1];
}
})

console.log(subPos.horizontal * subPos.depth)