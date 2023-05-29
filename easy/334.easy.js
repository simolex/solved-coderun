module.exports = function (inputString) {
    const regDate = /Ta[\’'\`]((So|Ko|Ta|Qa|Goo)\s+\d+)\s+/i;
    //  /Ta[\’'\`]([a-z]{2,}\s+\d+)\s+/i;
    const found = inputString.match(regDate);
    const result = found;
    if (result === null) return "0";
    return result[1].toLowerCase();
};
