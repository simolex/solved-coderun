// Не забудьте перед отправкой изменить в module.exports = function(html, css) {
const applyForAllNodes = (node, fn, parentStyle, delayedStyles, info) => {
    if (node.type === "ELEMENT") {
        const newCss = fn(node, parentStyle, delayedStyles, info);
        const level = info.level + 1;
        let pos = 0;
        node.children.forEach((child) => {
            if (child.type === "ELEMENT") {
                applyForAllNodes(child, fn, newCss, delayedStyles, { level, pos });
                pos++;
            }
        });
    }
};
const combinator = "[ \\~\\+\\>]+";
const getSelector = (cssRule) => {
    if (!cssRule.selector)
        return;
    const cleanCssRule = cssRule.selector.trim();
    const reCombinator = new RegExp(combinator, "i");
    const selectorRule = {};
    if (reCombinator.test(cleanCssRule)) {
        const resultCombinator = reCombinator.exec(cleanCssRule);
        selectorRule.first = cleanCssRule.substring(0, resultCombinator.index);
        selectorRule.second = cleanCssRule.substring(resultCombinator.index + resultCombinator[0].length);
        switch (resultCombinator[0].trim()) {
            case "":
                selectorRule.type = "inherit";
                break;
            case ">":
                selectorRule.type = "child";
                break;
            case "~":
                selectorRule.type = "neighbor";
                break;
            case "+":
                selectorRule.type = "intimate";
                break;
        }
    }
    else {
        selectorRule.type = "single";
        selectorRule.first = cleanCssRule;
    }
    return selectorRule;
};
export default function (html, css) {
    for (const [indexStyle, itemStyle] of css.entries()) {
        css[indexStyle].selectorRule = getSelector(itemStyle);
        // css[indexStyle].selectorRule.indexStyle = indexStyle;
    }
    const singleCssRules = css.filter((rule) => rule.selectorRule.type === "single");
    const otherCssRules = css.filter((rule) => rule.selectorRule.type !== "single");
    const applySingleRule = (node, parentStyle = {}) => {
        const currentRule = singleCssRules.find((rule) => rule.selectorRule.first === node.tag);
        let newStyle = {};
        if (currentRule) {
            newStyle = currentRule.declarations;
        }
        node.styles = Object.assign(Object.assign({}, parentStyle), newStyle); //{ ...node.styles, ...parentStyle, ...currentRule.declarations };
        return Object.assign(Object.assign({}, parentStyle), newStyle);
    };
    applyForAllNodes(html, applySingleRule, {}, [], { level: 0, pos: 0 });
    let currentIndex = 0;
    const applyCombinedRule = (node, parentStyle = {}, delayedStyles = [], info) => {
        const currentRule = otherCssRules[currentIndex];
        if (currentRule.selectorRule.first === node.tag) {
            let testRule;
            switch (currentRule.selectorRule.type) {
                case "inherit":
                    testRule = (testedInfo) => testedInfo.level > info.level;
                    break;
                case "child":
                    testRule = (testedInfo) => testedInfo.level === info.level + 1;
                    break;
                case "neighbor":
                    testRule = (testedInfo) => testedInfo.level === info.level && testedInfo.pos > info.pos;
                    break;
                case "intimate":
                    testRule = (testedInfo) => testedInfo.level === info.level && testedInfo.pos > info.pos + 1;
                    break;
            }
            delayedStyles.push(testRule);
        }
        let currentStyle = {};
        if (currentRule.selectorRule.second === node.tag && delayedStyles.some((testStyle) => testStyle(info))) {
            currentStyle = currentRule.declarations;
        }
        node.styles = Object.assign(Object.assign(Object.assign({}, node.styles), parentStyle), currentStyle);
        return Object.assign(Object.assign({}, parentStyle), currentStyle);
    };
    for (currentIndex = 0; currentIndex < otherCssRules.length; currentIndex++) {
        const ds = [];
        applyForAllNodes(html, applyCombinedRule, {}, ds, { level: 0, pos: 0 });
        //console.log(ds);
    }
    // console.log(html);
    return html;
}
