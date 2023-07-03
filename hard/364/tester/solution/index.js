const sizeOrZero = (value) => (value ? `${value}px` : "0");
const flexDirection = (value) => (value === "VERTICAL" ? "column" : "row");

const floatToByte = (value) => Math.round(value * 255);

const rgbToHex = (color) => {
    if (color.length === 0) return "inherit";

    const { r, g, b, a = 1 } = color[color.length - 1].color;
    if (floatToByte(a) === 255) {
        return (
            "#" + ((1 << 24) | (floatToByte(r) << 16) | (floatToByte(g) << 8) | floatToByte(b)).toString(16).slice(1)
        );
    } else {
        return (
            "#" +
            ((1 << 36) | (floatToByte(r) << 24) | (floatToByte(g) << 16) | (floatToByte(b) << 8) | floatToByte(a))
                .toString(16)
                .slice(1)
        );
    }
};
const axisAlign = {
    CENTER: "center",
    SPACE_BETWEEN: "space-between"
};

const TEXT_STYLES_MAPPER = {
    fontFamily: (value) => `font-family: ${value};`,
    fontSize: (value) => `font-size: ${value}px;`,
    fontWeight: (value) => `font-weight: ${value};`,
    textAlignHorizontal: (value) => `text-align: ${value.toLowerCase()};`,
    lineHeightPercent: (value) => `line-height: ${value}%;`
};

const FRAME_STYLES_MAPPER = {
    paddingLeft: (value) => `padding-left: ${sizeOrZero(value)};`,
    paddingRight: (value) => `padding-right: ${sizeOrZero(value)};`,
    paddingTop: (value) => `padding-top: ${sizeOrZero(value)};`,
    paddingBottom: (value) => `padding-bottom: ${sizeOrZero(value)};`,
    layoutMode: (value) => `display: flex; flex-direction: ${flexDirection(value)};`,
    layoutGrow: (value) => `flex-grow: ${value};`,
    counterAxisAlignItems: (value) => `align-items: ${axisAlign[value]};`,
    primaryAxisAlignItems: (value) => `justify-content: ${axisAlign[value]};`,

    absoluteBoundingBox: (box) => `width: ${sizeOrZero(box.width)}; height: ${sizeOrZero(box.height)};`,
    itemSpacing: (value) => `gap: ${value}px;`,
    background: (color) => `background-color: ${rgbToHex(color)};`,
    fills: (color) => `color: ${rgbToHex(color)};`
};

const buildBlock = ({ type, content, className, style }) => {
    return `<${type} class="${className}" style="${style}">${content}</${type}>`;
};

const getStyles = (node) => {
    const styleArr = [];
    if (node) {
        for (let [key, value] of Object.entries(node)) {
            if (FRAME_STYLES_MAPPER[key]) {
                styleArr.push(FRAME_STYLES_MAPPER[key](value));
            }
        }
    }
    if (node.style) {
        for (let [key, value] of Object.entries(node.style)) {
            if (TEXT_STYLES_MAPPER[key]) {
                styleArr.push(TEXT_STYLES_MAPPER[key](value));
            }
        }
    }
    return styleArr.join(" ");
};

const PRIMITIVES = {
    TEXT: (node, childs = "") => {
        return buildBlock({
            type: "span",
            content: node.characters,
            className: node.type,
            style: getStyles(node)
        });
    },
    DEFAULT: (node, childs) => {
        return buildBlock({
            type: "div",
            content: childs,
            className: node.name,
            style: ""
        });
    },
    FRAME: (node, childs) => {
        return buildBlock({
            type: "div",
            content: childs,
            className: node.name,
            style: getStyles(node)
        });
    },
    INSTANCE: (node, childs) => {
        return buildBlock({
            type: "div",
            content: childs,
            className: node.name,
            style: getStyles(node)
        });
    }
};

const parse = (entry) => {
    return traverse(entry.children[0]);
};

const traverse = (node) => {
    const childContent =
        node.children &&
        node.children.reduce(
            (code, child) => `${code}
    ${traverse(child)}`,

            ""
        );

    if (PRIMITIVES.hasOwnProperty(node.type)) return PRIMITIVES[node.type](node, childContent);
    else return PRIMITIVES["DEFAULT"](node, childContent);
};

module.exports = function (json) {
    const entry = json.document.children[0];
    return parse(entry);
};
