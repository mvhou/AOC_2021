import reader from '../readFile.js'

const draw = reader.getLines("d04")[0].split(',')
const input = reader.getLines("d04")
const width = input[2].length;

let boards = [];

for (let i = 2; i < input.length; i += 6) {
  boards.push(input.slice(i, i+5).map(line => line.split(/[ ]+/).filter(x => x != '')));
}

const vertical = (board) => board.map((_, i) => board.map(col => col[i]))

const checkLine = (line) => line.every(a => a == '');

const checkBoard = (board) => board.some(line => checkLine(line)) || vertical(board).some(line => checkLine(line));

const sumBoard = (board) => board.reduce((acc, line) => acc + line.reduce((lacc, field) => lacc + parseInt(field), 0), 0)

const clearBoard = Array(width).map(_ => Array(width).fill('X'));

const winners = [];

draw.forEach(n => {
  boards.forEach((board, ib) => {
    board.forEach((line, il) => line.forEach((num, i) => boards[ib][il][i] = ((num == n) ? '' : num)))
    if (checkBoard(board)) {
      winners.push(sumBoard(board) * n);
      boards[ib] = clearBoard;
    }
  })
})

console.log(`part 1 = ${winners[0]}\npart 2 = ${winners[winners.length-1]}`);