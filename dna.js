function dnaStringFilter(dnaString) {
    if (dnaString === "") {
        return "";
    }

    const filteredDnaString = dnaString.replace(/[^CTAG]/g, '');
    return filteredDnaString;
}

module.exports = dnaStringFilter;