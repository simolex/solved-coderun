module.exports = function (countNails, nailPositions) {
    nailPositions.sort((a, b) => a - b);

    console.log(nailPositions);
};
