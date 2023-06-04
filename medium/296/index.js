/**
 * @param {string} genA
 * @param {string} genB
 * @param {number} level
 * @returns {boolean}
 */
function isRelativies(genA, genB, level) {
    const lengthGenA = genA.length;
    const lengthGenB = genB.length;

    const compareMatrix = [];
    let maxLengthEqual = 0;
    let maxPosition = { i: 0, j: 0 };

    compareMatrix[0] = Array(lengthGenB + 1).fill(0);
    for (let i = 1; i <= lengthGenA; i++) {
        compareMatrix[i] = [0];
        for (let j = 1; j <= lengthGenB; j++) {
            let cmp = 0;
            if (genA.charAt(i - 1) === genB.charAt(j - 1)) {
                cmp = compareMatrix[i - 1][j - 1] + 1;
                if (cmp > maxLengthEqual) {
                    maxLengthEqual = cmp;
                    maxPosition = { i, j };
                }
            }
            compareMatrix[i].push(cmp);
        }
    }

    if (maxLengthEqual > 0) {
        let commonSubstring = "";
        let { i, j } = maxPosition;
        while (compareMatrix[i][j] > 0) {
            commonSubstring = genA.charAt(i - 1) + commonSubstring;
            i--;
            j--;
        }
        const maxLengthMutation = Math.max(lengthGenA, lengthGenB) - maxLengthEqual;
        if (maxLengthMutation <= level) return true;
    }
    return false;
}

exports.isRelativies = isRelativies;
