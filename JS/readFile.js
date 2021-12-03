import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const reader = () => {

    const fs = require('fs')

    const getInput = (day) => {
        return (fs.readFileSync(`${day}/input.txt`).toString());
    }

    const getLines = (day) => {
        return (fs.readFileSync(`${day}/input.txt`).toString().split('\n'));
    }

    const getLinesBy = (day, str) => {
        return (fs.readFileSync(`${day}/input.txt`).toString().split(str));
    }

    const getTestInput = (day) => {
        return (fs.readFileSync(`${day}/test.txt`).toString());
    }

    const getTestLines = (day) => {
        return (fs.readFileSync(`${day}/test.txt`).toString().split('\n'));
    }

    const getTestLinesBy = (day, str) => {
        return (fs.readFileSync(`${day}/test.txt`).toString().split(str));
    }

    return {
        getInput,
        getLines,
        getLinesBy,
        getTestInput,
        getTestLines,
        getTestLinesBy
    };
}

export default reader();