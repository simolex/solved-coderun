const setStyles = require(".");

const htmlSet1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
    ],
};
const cssSet1 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "15px",
        },
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 0, 255)",
        },
    },
];
const resultSet1 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {
        color: "rgb(0, 255, 0)",
        "font-size": "15px",
    },
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 0, 255)",
                "font-size": "15px",
            },
            children: [
                {
                    type: "TEXT",
                    text: "text",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
    ],
};

const htmlSet2 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "TEXT",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "TEXT",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n    ",
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
                            text: "TEXT",
                        },
                    ],
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
    ],
};
const cssSet2 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px",
        },
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px",
        },
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right",
        },
    },
];

const resultSet2 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {
        color: "rgb(0, 0, 0)",
        "text-align": "left",
        "font-size": "16px",
    },
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 255, 0)",
                "text-align": "left",
                "font-size": "13px",
            },
            children: [
                {
                    type: "TEXT",
                    text: "TEXT",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {
                color: "rgb(0, 0, 255)",
                "text-align": "right",
                "font-size": "16px",
            },
            children: [
                {
                    type: "TEXT",
                    text: "TEXT",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {
                color: "rgb(0, 255, 0)",
                "text-align": "left",
                "font-size": "13px",
            },
            children: [
                {
                    type: "ELEMENT",
                    tag: "tag2",
                    styles: {
                        color: "rgb(0, 0, 255)",
                        "text-align": "right",
                        "font-size": "13px",
                    },
                    children: [
                        {
                            type: "TEXT",
                            text: "TEXT",
                        },
                    ],
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
    ],
};

const htmlSet3 = {
    type: "ELEMENT",
    tag: "parent",
    styles: {},
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text1",
                },
            ],
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text2",
                },
            ],
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {},
            children: [
                {
                    type: "TEXT",
                    text: "text2",
                },
            ],
        },
    ],
};
const cssSet3 = [
    {
        selector: "parent",
        declarations: {
            color: "rgb(0, 0, 0)",
            "text-align": "left",
            "font-size": "16px",
        },
    },
    {
        selector: "tag",
        declarations: {
            color: "rgb(0, 255, 0)",
            "font-size": "13px",
        },
    },
    {
        selector: "tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right",
        },
    },
    {
        selector: "tag tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right",
        },
    },
    {
        selector: "tag>tag2",
        declarations: {
            color: "rgb(0, 0, 255)",
            "text-align": "right",
        },
    },
    {
        selector: "tag1 +tag2",
        declarations: {
            color: "rgb(255, 0, 255)",
        },
    },
    {
        selector: "tag1~ tag2",
        declarations: {
            "font-weight": "bold",
        },
    },
];

const resultSet3 = {
    type: "ELEMENT",
    tag: "parent",
    styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
    children: [
        {
            type: "TEXT",
            text: "\n    ",
        },
        {
            type: "ELEMENT",
            tag: "tag",
            styles: { color: "rgb(0, 255, 0)", "text-align": "left", "font-size": "13px" },
            children: [
                {
                    type: "TEXT",
                    text: "text",
                },
            ],
        },
        {
            type: "TEXT",
            text: "\n",
        },
        {
            type: "ELEMENT",
            tag: "tag1",
            styles: { color: "rgb(0, 0, 0)", "text-align": "left", "font-size": "16px" },
            children: [
                {
                    type: "TEXT",
                    text: "text1",
                },
            ],
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {
                "font-size": "16px",
                color: "rgb(255, 0, 255)",
                "text-align": "right",
                "font-weight": "bold",
            },
            children: [
                {
                    type: "TEXT",
                    text: "text2",
                },
            ],
        },
        {
            type: "ELEMENT",
            tag: "tag2",
            styles: {
                "font-size": "16px",
                color: "rgb(0, 0, 0)",
                "text-align": "right",
                "font-weight": "bold",
            },
            children: [
                {
                    type: "TEXT",
                    text: "text2",
                },
            ],
        },
    ],
};

describe("365. Apply styles", () => {
    // test("test-1", () => {
    //     const result = setStyles(htmlSet1, cssSet1);
    //     expect(result).toEqual(resultSet1);
    // });

    // test("test-2", () => {
    //     const result = setStyles(htmlSet2, cssSet2);
    //     expect(result).toEqual(resultSet2);
    // });

    test("test-3", () => {
        const result = setStyles(htmlSet3, cssSet3);
        expect(result).toEqual(resultSet3);
    });
});
