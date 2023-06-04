module.exports = (string) => {
    let lastIndex = string.length - 1;
    const prefixs = [["7"], ["1", "1", "7"], ["1", "1", "1", "1"]];

    if (lastIndex < 0) return false;

    while (lastIndex >= 0) {
        const oldLastIndex = lastIndex;
        for (let i = 0; i < 3; i++) {
            let lenPart = prefixs[i].length;
            for (let k = lenPart, j = 0; j < k && oldLastIndex - k >= -1; j++) {
                if (string.charAt(lastIndex - j) === prefixs[i][j]) {
                    lenPart--;
                }
                if (lenPart === 0) {
                    lastIndex -= j + 1;
                }
            }
            if (lenPart === 0) break;
        }
        if (oldLastIndex === lastIndex) return false;
    }
    return true;
};
