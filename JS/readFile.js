import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const reader = () => {

    const fs = require('fs')

    const getInput = (file) => {
        return (fs.readFileSync(file).toString());
    }

    const getLines = (file) => {
        return (fs.readFileSync(file).toString().split('\n'));
    }

    const getLinesBy = (file, str) => {
        return (fs.readFileSync(file).toString().split(str));
    }

    return {
        getInput,
        getLines,
        getLinesBy
    };
}

export default reader();