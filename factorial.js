//recursion, se llama a si misma

function factorial (number) {
    if (number === 1) {
        return 1;
    } else {
        return number * factorial (number-1);
    }
}
module.exports = factorial;