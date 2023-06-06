module.exports = (str) => {
    const strParts = str.replace("\r\n", "\n").replace("'", '"').split("\n");
    const isEmpty = (text) => text === "";
    const testHead = /^= /;
    const testListItem = /^[\*][ ]/;
    const testLinkPos = /\(\([^\) ]*? [^\)]*?\)\)/g;
    const testLink = /\(\(([^\) ]*? [^\)]*?)\)\)/;

    const createHeadTag = (content) => `<h1>${content}</h1>`;
    const createListTag = (content) => `<ul>${content}</ul>`;
    const createListItemTag = (content) => `<li>${content}</li>`;
    const createParagraphTag = (content) => `<p>${content}</p>`;
    const createLinkTag = (content) => {
        const contentParts = content.split(" ");
        const url = contentParts.shift();
        return `<a href="${url}">${contentParts.join(" ")}</a>`;
    };

    const findAndReplaceLink = (text) => {
        let testResult;
        let returnResult = text;
        while ((testResult = testLinkPos.exec(returnResult)) !== null) {
            returnResult =
                returnResult.substring(0, testResult.index) +
                createLinkTag(testLink.exec(testResult[0])[1]) +
                returnResult.substring(testLinkPos.lastIndex);
        }
        return returnResult;
    };

    let result = "";
    let isList = false;
    let stackListsItem = [];
    for (let i = 0; i < strParts.length; i++) {
        switch (true) {
            case isEmpty(strParts[i]):
                isList = true;
                if (stackListsItem.length > 0) {
                    result += createListTag(stackListsItem.join(""));
                }
                stackListsItem = [];
                break;
            case testHead.test(strParts[i]):
                const head = strParts[i].substring(2);
                result += createHeadTag(findAndReplaceLink(head));
                isList = false;
                break;
            case testListItem.test(strParts[i]):
                isList = true;
                const item = strParts[i].substring(2);
                stackListsItem.push(createListItemTag(findAndReplaceLink(item)));
                break;
            default:
                isList = false;
                result += createParagraphTag(findAndReplaceLink(strParts[i]));
        }
    }

    return result;
};
