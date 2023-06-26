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
    const comboSymbolPattern = "(?:(?<![>~\\+])(\\s+)(?![>~\\+])|(?:\\s*([>~\\+])\\s*))";

    const re = RegExp(`^${oneTagPattern}${comboSymbolPattern}?${oneTagPattern}?$`);
    for (const oneStyle of css) {
        console.log(re.exec(oneStyle.selector));
    }

    const dfsHtml = (root, fnNode) => {};
    return "";
};
