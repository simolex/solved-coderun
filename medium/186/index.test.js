const { getLastCommonCommitMessage } = require(".");

const commits = [
    {
        id: "1",
        message: "initial commit",
        timestamp: 1624010073113,
    },
    {
        id: "2",
        parents: ["1"],
        message: "add layout",
        timestamp: 1624010082219,
    },
    {
        id: "3",
        parents: ["2"],
        message: "fix bugs",
        timestamp: 1624010109039,
        branches: ["master", "bugfix"],
    },
    {
        id: "4",
        parents: ["2"],
        message: "add link",
        timestamp: 1624010179662,
        branches: ["feature/link"],
    },
];

const branches = ["bugfix", "feature/link"];

describe("186. The general commit", () => {
    test("test", () => {
        const result = getLastCommonCommitMessage(commits, branches);
        expect(result).toBe("add layout");
    });
});
