module.exports = function (inputString) {
    const maskId = /^([GHK-U][3-8]{3})([TB])((?<=B)[CKMB][GJP]|(?<=T)[ORS][J8ME])([0-9A-Y]{1,24})Z$/;
    let result = inputString.match(maskId);
    if (result !== null) {
        result = result.filter((_, index) => index > 0 && index <= 4);
    }
    return result;
};
