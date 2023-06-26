// export type TextNode = {
//     type: 'TEXT';
//     text: string;
// }

// export type ElementNode = {
//     type: 'ELEMENT'
//     styles: Record<string, string>;
//     tag: string;
//     children: Array<ElementNode | TextNode>;
// }

// export type HtmlNode = ElementNode | TextNode;

// export type CssRule = {
//   selector: string;
//   declarations: Record<string, string>;
// }

// module.exports = function (html: HtmlNode, css: Array<CssRule>): HtmlNode {};
/**
 *
 * @param {HtmlNode} html
 * @param {Array<CssRule>} css
 * @returns {HtmlNode}
 */

module.exports = function (html, css) {
    const oneTagPattern = "([^\\s\\~\\+\\>]+)";
    // const comboSymbolPattern = "(?:(?<![>~\\+])(\\s+)(?![>~\\+])|(?:\\s*([>~\\+])\\s*))";
    const comboSymbolPattern = "((?<![>~\\+])\\s?[>~\\+]?)\\s*";
    const setOfSelectors = {};

    const regSelector = RegExp(`^${oneTagPattern}${comboSymbolPattern}?${oneTagPattern}?$`);
    for (const oneStyle of css) {
        // console.log(re.exec(oneStyle.selector.split(" ").filter(Boolean).join(" ")));
        const selector = regSelector.exec(oneStyle.selector.split(" ").filter(Boolean).join(" "));
        if (selector[3] === undefined) {
            if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];
            setOfSelectors[selector[1]].push({
                isSimpleStyle: true,
                appliedStyle: { ...oneStyle.declarations }
            });
        } else {
            switch (selector[2].trim()) {
                case "":
                    setOfSelectors[selector[1]].push({
                        isInheritable: true,
                        appliedTag: selector[3],
                        appliedStyle: { ...oneStyle.declarations }
                    });
                    break;
                case ">":
                    setOfSelectors[selector[1]].push({
                        isOnceInheritable: true,
                        appliedTag: selector[3],
                        appliedStyle: { ...oneStyle.declarations }
                    });
                    break;
                case "~":
                    setOfSelectors[selector[1]].push({
                        isIntimate: true,
                        appliedTag: selector[3],
                        appliedStyle: { ...oneStyle.declarations }
                    });
                    break;
                case "+":
                    setOfSelectors[selector[1]].push({
                        isNeighbor: true,
                        appliedTag: selector[3],
                        appliedStyle: { ...oneStyle.declarations }
                    });
                    break;
            }
        }
    }

    for (const key in setOfSelectors) {
        setOfSelectors[key];
    }

    const dfsHtml = (root, fnNode) => {};
    return "";
};
