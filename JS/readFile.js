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

    return {
        getInput,
        getLines,
        getLinesBy
    };
}

export default reader();