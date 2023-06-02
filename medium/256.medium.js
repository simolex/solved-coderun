//const getIt()

module.exports = function (content) {
    const openDescribe = /^(.*?\n)*.*?describe\(.*?(?=\n)\n/gim;

    const closeDescribe = /^(?<=\s*?\}\);.*?\n)(\}\);)(?=\n)\n/gim;

    const blockItTest = /^(\s*?it(\.skip)?\(.+(?=\n)\n)/gim;

    const getStartEndPosition = (content, pattern) => {
        const result = pattern.exec(content);
        if (result === null) return false;
        return { start: result.index, end: pattern.lastIndex, content: result[0] };
    };

    const createItTests = (content, prefix, postfix, pattern) => {
        const tests = [];
        let prevIndex = 0;
        let finded = false;
        while ((result = pattern.exec(content)) !== null) {
            console.log("eee=>", result, "eef=>", pattern.lastIndex);
            finded = true;
            currentIndex = result.index;
            if (currentIndex != prevIndex) {
                tests.push(`${prefix}${content.substring(prevIndex, currentIndex).trimEnd("\n")}\n${postfix}`);
            }
            prevIndex = currentIndex;
        }
        if (finded) {
            tests.push(`${prefix}${content.substring(prevIndex)}${postfix}`);
        }
        return tests;
    };

    const openDescribeResult = getStartEndPosition(content, openDescribe);
    const closeDescribeResult = getStartEndPosition(content, closeDescribe);

    const testsListText = content.substring(openDescribeResult.end, closeDescribeResult.start);

    return createItTests(testsListText, openDescribeResult.content, closeDescribeResult.content, blockItTest);
};

/**
 *  /^describe.*?(?=\n)\n((.+\n)+)\}\);.*?(?=\n)$/gim - only it-pull
 *  /describe.*?(?=\n)/gmi - старт describe
 *  /^\s*it(\.skip)?.+(?=\n)$/gim - test start
 *  /^\s*?\}\);.*?(?=\n)$/gmi - end test
 */
// const blockItTest = /^(?<test>\s*it(\.skip)?.+(?=\n)\n(.*\n)*?(\s*?\}\);.*?)(?=\n)$)/gim;
