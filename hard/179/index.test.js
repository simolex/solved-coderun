const mergeAllPRs = require(".");

const pullRequests_1 = [
    {
        id: "#1",
        created: 1536077100,
        files: [".gitignore", "README.md"],
    },
    {
        id: "#2",
        created: 1536077700,
        files: ["index.js", "package-lock.json", "package.json"],
    },
    {
        id: "#3",
        created: 1536077800,
        files: [".pnp.js", "yarn.lock"],
    },
];

const pullRequests_2 = [
    {
        id: "#1",
        created: 1536074100,
        files: ["README.md"],
    },
    {
        id: "#2",
        created: 1536078700,
        files: ["README.md"],
    },
    {
        id: "#3",
        created: 1536097800,
        files: ["README.md"],
    },
];

const pullRequests_3 = [
    {
        id: "#1",
        created: 1536077100,
        files: [".gitignore", "README.md"],
    },
    {
        id: "#2",
        created: 1536077700,
        files: ["index.js", "package-lock.json", "package.json"],
    },
    {
        id: "#3",
        created: 1536077800,
        files: [".pnp.js", "package-lock.json", "yarn.lock"],
    },
    {
        id: "#4",
        created: 1536077900,
        files: ["index.spec.js", "index.spec.ts", "index.ts"],
    },
];

describe("179. Robot for pool-requests", () => {
    test("test-1", () => {
        const result = mergeAllPRs(pullRequests_1);
        expect(result).toEqual(["#1", "#2", "#3"]);
    });
    test("test-2", () => {
        const result = mergeAllPRs(pullRequests_2);
        expect(result).toEqual(["#1"]);
    });
    test("test-3", () => {
        const result = mergeAllPRs(pullRequests_2);
        expect(result).toEqual(["#1", "#2", "#4"]);
    });
});
