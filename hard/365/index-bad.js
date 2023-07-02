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
    for (const [idxStyle, oneStyle] of css.entries()) {
        const selector = regSelector.exec(oneStyle.selector.split(" ").filter(Boolean).join(" "));
        if (selector === null || !selector[1] || selector[1].length === 0) continue;
        if (selector[3] === undefined) {
            if (selector[1] && selector[1].length > 0) {
                if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];
                setOfSelectors[selector[1]].push({
                    isSimpleStyle: true,
                    idxStyle,
                    appliedStyle: { ...oneStyle.declarations }
                });
            }
        } else {
            if (selector[1] && selector[1].length > 0) {
                switch (selector[2] && selector[2].trim()) {
                    case "":
                        if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];

                        setOfSelectors[selector[1]].push({
                            isInheritable: true,
                            idxStyle,
                            appliedTag: selector[3].trim(),
                            appliedStyle: { ...oneStyle.declarations }
                        });
                        break;
                    case ">":
                        if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];

                        setOfSelectors[selector[1]].push({
                            isOnceInheritable: true,
                            idxStyle,
                            appliedTag: selector[3].trim(),
                            appliedStyle: { ...oneStyle.declarations }
                        });
                        break;
                    case "+":
                        if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];
                        setOfSelectors[selector[1]].push({
                            isIntimate: true,
                            idxStyle,
                            appliedTag: selector[3].trim(),
                            appliedStyle: { ...oneStyle.declarations }
                        });
                        break;
                    case "~":
                        if (!setOfSelectors[selector[1]]) setOfSelectors[selector[1]] = [];

                        setOfSelectors[selector[1]].push({
                            isNeighbor: true,
                            appliedTag: selector[3].trim(),
                            appliedStyle: { ...oneStyle.declarations }
                        });
                        break;
                }
            }
        }
    }

    const dfsHtml = (root, level, defaultStyles = {}, delayedStyles = []) => {
        if (root.type === "ELEMENT") {
            const currentStyles = setOfSelectors[root.tag.trim()];
            if (!currentStyles) currentStyles = [];
            let currentAppliedStyles = defaultStyles;

            const newDelayedStyles = [];

            currentStyles.forEach((style) => {
                if (style.isSimpleStyle) {
                    currentAppliedStyles = { ...currentAppliedStyles, ...style.appliedStyle };
                }
                if (style.isInheritable || style.isOnceInheritable) {
                    newDelayedStyles.push({ ...style, initLevel: level });
                }
            });

            delayedStyles.forEach((style) => {
                if (root.tag.trim() === style.appliedTag) {
                    currentAppliedStyles = { ...currentAppliedStyles, ...style.appliedStyle };
                }
            });

            root.styles = currentAppliedStyles;
            const neighbors = [];
            let intimate = undefined;
            root.children.forEach((child) => {
                if (child.type === "ELEMENT") {
                    const oneLevelStyles = [];
                    //const getedTag = setOfSelectors[child.tag.trim()];

                    // neighbors.forEach((item) => {
                    //     if (item.appliedTag === child.tag.trim()) {
                    //         oneLevelStyles.push(item);
                    //     }
                    // });
                    // if (getedTag && getedTag.isNeighbor) {
                    //     neighbors.push(getedTag);
                    //     0;
                    // }

                    // if (intimate && intimate.appliedTag === child.tag.trim()) {
                    //     oneLevelStyles.push(intimate);
                    //     intimate = undefined;
                    // }
                    // if (getedTag && getedTag.isIntimate) {
                    //     intimate = getedTag;
                    // } else {
                    //     intimate = undefined;
                    // }
                    dfsHtml(child, level + 1, currentAppliedStyles, [
                        ...delayedStyles.filter((style) => style.isInheritable),
                        ...newDelayedStyles,
                        ...oneLevelStyles
                    ]);
                }
            });
        }
    };

    dfsHtml(html, 0);
    return html;
};
