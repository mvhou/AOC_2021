import reader from '../readFile.js'

let input = reader.getLinesBy("d06", ',').map(x => +x)

let days = Array(9).fill(0);
input.forEach(fish => days[fish]++)

for (let time = 0; time < 256; time++) {
    let newBorn = days[0];
    days = days.slice(1).concat(newBorn);
    days[6] += newBorn;
}

console.log(days.reduce((acc, x) => acc + x));