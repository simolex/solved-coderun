const setStyles = require(".");

const htmlSet0 = {
    type: "TEXT",
    text: "\n    "
};
const cssSet0 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "15px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 0, 255)"
        }
    }
];
const resultSet0 = {
    type: "TEXT",
    text: "\n    "
};

const htmlSet01 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: []
};
const cssSet01 = [];
const resultSet01 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: []
};

const htmlSet1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        }
    ]
};
const cssSet1 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "15px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 0, 255)"
        }
    }
];
const resultSet1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {
        color: "rgb(0, 255, 0)",
        "font-size": "15px"
    },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 0, 255)",
                "font-size": "15px"
            },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        }
    ]
};

const htmlSet2 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "TEXT"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "TEXT"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "ELEMENT",
                    tag: "tag2",
                    styles: {},
                    children: [
                        {
                            type: "TEXT",
                            text: "TEXT"
                        }
                    ]
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        }
    ]
};
const cssSet2 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    }
];

const resultSet2 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {
        color: "rgb(0, 0, 0)",
        "text-align": "left",
        "font-size": "16px"
    },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 255, 0)",
                "text-align": "left",
                "font-size": "13px"
            },
            children: [
                {
                    type: "TEXT",
                    text: "TEXT"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {
                color: "rgb(0, 0, 255)",
                "text-align": "right",
                "font-size": "16px"
            },
            children: [
                {
                    type: "TEXT",
                    text: "TEXT"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 255, 0)",
                "text-align": "left",
                "font-size": "13px"
            },
            children: [
                {
                    type: "ELEMENT",
                    tag: "tag2",
                    styles: {
                        color: "rgb(0, 0, 255)",
                        "text-align": "right",
                        "font-size": "13px"
                    },
                    children: [
                        {
                            type: "TEXT",
                            text: "TEXT"
                        }
                    ]
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        }
    ]
};

const htmlSet3 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text1"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text2"
                }
            ]
        }
    ]
};
const cssSet3 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    },
    {
        selector: "parent tag",
        declarations: {
            "text-align": "center"
        }
    }
];

const resultSet3 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text1"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text2"
                }
            ]
        }
    ]
};

const htmlSet4 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text1"
                },
                {
                    type: "ELEMENT",
                    tag: "tag",
                    styles: {},
                    children: [
                        {
                            type: "TEXT",
                            text: "text3"
                        }
                    ]
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text2"
                }
            ]
        }
    ]
};
const cssSet4 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    },
    {
        selector: "parent>tag",
        declarations: {
            "text-align": "center"
        }
    }
];
const resultSet4 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text1"
                },
                {
                    type: "ELEMENT",
                    tag: "tag",
                    styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
                    children: [
                        {
                            type: "TEXT",
                            text: "text3"
                        }
                    ]
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text2"
                }
            ]
        }
    ]
};

const htmlSet5 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};
const cssSet5 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    },
    {
        selector: "tag+tag1",
        declarations: {
            "text-align": "center"
        }
    }
];
const resultSet5 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "center", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};

const htmlSet5_1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};
const cssSet5_1 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    },
    {
        selector: "tag+tag",
        declarations: {
            "text-align": "center"
        }
    }
];
const resultSet5_1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "center", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};

const htmlSet6 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};
const cssSet6 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px"
        }
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px"
        }
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right"
        }
    },
    {
        selector: "tag~tag1",
        declarations: {
            "text-align": "center"
        }
    }
];
const resultSet6 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    "
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "TEXT",
            text: "\n"
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: { color: "rgb(0, 0, 255)", "text-align": "right", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "center", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "center", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text"
                }
            ]
        }
    ]
};

describe("365. Apply styles", () => {
    test("test-0 (only text)", () => {
        const result = setStyles(htmlSet0, cssSet0);
        expect(result).toEqual(resultSet0);
    });
    test("test-01 (empty css)", () => {
        const result = setStyles(htmlSet01, cssSet01);
        expect(result).toEqual(resultSet01);
    });
    test("test-1", () => {
        const result = setStyles(htmlSet1, cssSet1);
        expect(result).toEqual(resultSet1);
    });
    test("test-2", () => {
        const result = setStyles(htmlSet2, cssSet2);
        expect(result).toEqual(resultSet2);
    });
    test("test-3 (space)", () => {
        const result = setStyles(htmlSet3, cssSet3);
        expect(result).toEqual(resultSet3);
    });
    test("test-4 (child)", () => {
        const result = setStyles(htmlSet4, cssSet4);
        expect(result).toEqual(resultSet4);
    });
    test("test-5 (plus)", () => {
        const result = setStyles(htmlSet5, cssSet5);
        expect(result).toEqual(resultSet5);
    });
    test("test-6 (neighbor)", () => {
        const result = setStyles(htmlSet6, cssSet6);
        expect(result).toEqual(resultSet6);
    });
    test("test-5_1 (neighbor)", () => {
        const result = setStyles(htmlSet5_1, cssSet5_1);
        expect(result).toEqual(resultSet5_1);
    });
});
