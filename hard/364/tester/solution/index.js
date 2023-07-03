const TEXT_STYLES_MAPPER = {
    fontSize: (value) => `font-size: ${value}px;`,
    fontWeight: (value) => `font-weight: ${value};`,
    textAlignHorizontal: (value) => `text-align: ${value.toLowerCase()};`,
};

const FRAME_STYLES_MAPPER = {};

const buildBlock = ({ type, content, className, style }) => {
    return `<${type} class="${className}" style="${style}">${content}</${type}>`;
};

const getTextStyles = (node) => {
    const styleArr = [];
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
    TEXT: (node) => {
        return buildBlock({
            type: "span",
            content: node.characters,
            className: node.type,
            style: getTextStyles(node),
        });
    },
    DEFAULT: (node, childs) => {
        return buildBlock({
            type: "div",
            content: childs,
            className: node.name,
            style: "",
        });
    },
    FRAME: (node, childs) => {
        return buildBlock({
            type: "div",
            content: childs,
            className: node.name,
            style: "",
        });
    },
};

const parse = (entry) => {
    return traverse(entry.children[0]);
};

const traverse = (node) => {
    const childContent =
        node.children &&
        node.children.reduce(
            (code, child) => code + traverse(child),

            ""
        );

    if (PRIMITIVES.hasOwnProperty(node.type)) return PRIMITIVES[node.type](node, childContent);
    else return PRIMITIVES["DEFAULT"](node, childContent);
};

module.exports = function (json) {
    const entry = json.document.children[0];
    return parse(entry);
};
