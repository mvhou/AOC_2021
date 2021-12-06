const marrk = () => {

    const char = (x) => (typeof x == 'number') ? String.fromCharCode(x) : '';
    const int = (c) => (typeof c == 'string') ? c.charCodeAt(0) : -1;

    const newArray = (start, end, step=1) => {
        if (typeof start == typeof end && ['string', 'number'].includes(typeof start)) {
            if (typeof start == 'string') {
                const length = Math.floor((Math.abs(int(end) - int(start)) + step) / step);
                const inc = (end > start) ? 1 : -1;
                const s = int(start);
                return Array(length).fill().map((_, i) => char(s + (i * inc) * step));
            } else {
                const length = Math.floor((Math.abs(end - start) + step) / step);
                const inc = (end > start) ? 1 : -1;
                return Array(length).fill().map((_, i) => start + (i * inc) * step);
            }
        }
    }

    const transpose = (arr) => arr.map((_,i) => arr.map(row => row[i]));

    const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

    const product = (arr) => arr.reduce((acc, x) => acc * x, 1);

    const max = (arr) => arr.reduce((acc, x) => (acc > x) ? acc : x, arr[0]);

    const min = (arr) => arr.reduce((acc, x) => (acc < x) ? acc : x, arr[0]);

    const count = (arr, elem) => arr.reduce((acc, x) => (x == elem) ? acc + 1 : acc, 0);

    const countAll = (arr) => arr.reduce((acc,x) => {
        acc[x] = (acc[x] || 0) + 1;
        return acc
        ,{}
    })

    const most = (arr) => {
        const tempArr = countAll(arr);
        return Object.keys(tempArr).reduce((a, b) => tempArr[a] > tempArr[b] ? a : b);
    }


    return {
        newArray,
        transpose,
        product,
        sum,
        max,
        min,
        count,
        most,
        char,
        int
    }
}

export default marrk();