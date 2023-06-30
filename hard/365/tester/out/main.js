// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
export default function (html, css) {
    const oneTagPattern = "([^\\s\\~\\+\\>]+)";
    // const comboSymbolPattern = "(?:(?<![>~\\+])(\\s+)(?![>~\\+])|(?:\\s*([>~\\+])\\s*))";
    const comboSymbolPattern = "((?<![>~\\+])\\s?[>~\\+]?)\\s*";
    const setOfSelectors = {};
    const regSelector = RegExp(`^${oneTagPattern}${comboSymbolPattern}?${oneTagPattern}?$`);
    for (const oneStyle of css) {
        // console.log(re.exec(oneStyle.selector.split(" ").filter(Boolean).join(" ")));
        const selector = regSelector.exec(oneStyle.selector.split(" ").filter(Boolean).join(" "));
        if (selector[3] === undefined) {
            if (!setOfSelectors[selector[1]])
                setOfSelectors[selector[1]] = [];
            setOfSelectors[selector[1]].push({
                isSimpleStyle: true,
                appliedStyle: Object.assign({}, oneStyle.declarations),
            });
        }
        else {
            switch (selector[2].trim()) {
                case "":
                    if (!setOfSelectors[selector[1]])
                        setOfSelectors[selector[1]] = [];
                    setOfSelectors[selector[1]].push({
                        isInheritable: true,
                        appliedTag: selector[3].trim(),
                        appliedStyle: Object.assign({}, oneStyle.declarations),
                    });
                    break;
                case ">":
                    if (!setOfSelectors[selector[1]])
                        setOfSelectors[selector[1]] = [];
                    setOfSelectors[selector[1]].push({
                        isOnceInheritable: true,
                        appliedTag: selector[3].trim(),
                        appliedStyle: Object.assign({}, oneStyle.declarations),
                    });
                    break;
                case "+":
                    if (!setOfSelectors[selector[1]])
                        setOfSelectors[selector[1]] = [];
                    setOfSelectors[selector[1]].push({
                        isIntimate: true,
                        appliedTag: selector[3].trim(),
                        appliedStyle: Object.assign({}, oneStyle.declarations),
                    });
                    break;
                case "~":
                    if (!setOfSelectors[selector[1]])
                        setOfSelectors[selector[1]] = [];
                    setOfSelectors[selector[1]].push({
                        isNeighbor: true,
                        appliedTag: selector[3].trim(),
                        appliedStyle: Object.assign({}, oneStyle.declarations),
                    });
                    break;
            }
        }
    }
    for (const key in setOfSelectors) {
        setOfSelectors[key];
    }
    const dfsHtml = (root, level, defaultStyles = {}, delayedStyles = []) => {
        if (root.type === "ELEMENT") {
            const currentStyles = setOfSelectors[root.tag.trim()];
            if (!currentStyles)
                currentStyles = [];
            let currentAppliedStyles = defaultStyles;
            const newDelayedStyles = [];
            currentStyles.forEach((style) => {
                if (style.isSimpleStyle) {
                    currentAppliedStyles = Object.assign(Object.assign({}, currentAppliedStyles), style.appliedStyle);
                }
                if (style.isInheritable || style.isOnceInheritable) {
                    newDelayedStyles.push(Object.assign(Object.assign({}, style), { initLevel: level }));
                }
            });
            delayedStyles.forEach((style) => {
                if (root.tag.trim() === style.appliedTag) {
                    //if (style.isInheritable || (style.isOnceInheritable && initLevel === level + 1))
                    currentAppliedStyles = Object.assign(Object.assign({}, currentAppliedStyles), style.appliedStyle);
                }
            });
            root.styles = currentAppliedStyles;
            const neighbors = [];
            let intimate = undefined;
            root.children.forEach((child) => {
                if (child.type === "ELEMENT") {
                    const oneLevelStyles = [];
                    const getedTag = setOfSelectors[child.tag.trim()];
                    neighbors.forEach((item) => {
                        if (item.appliedTag === child.tag.trim()) {
                            oneLevelStyles.push(item);
                        }
                    });
                    if (getedTag && getedTag.isNeighbor) {
                        neighbors.push(getedTag);
                    }
                    if (intimate && intimate.appliedTag === child.tag.trim()) {
                        oneLevelStyles.push(intimate);
                        intimate = undefined;
                    }
                    if (getedTag && getedTag.isIntimate) {
                        intimate = getedTag;
                    }
                    else {
                        intimate = undefined;
                    }
                    dfsHtml(child, level + 1, currentAppliedStyles, [
                        ...delayedStyles.filter((style) => style.isInheritable),
                        ...newDelayedStyles,
                        ...oneLevelStyles,
                    ]);
                }
            });
        }
    };
    dfsHtml(html, 0);
    return html;
}
