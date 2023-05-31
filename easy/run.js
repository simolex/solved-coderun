const { decode } = require("./320.easy.js");

// const a = decode("Aa", [{ from: "a", to: "b" }]);

const a = decode("Aa", [{ from: "a", to: "b" }]);
// const a = decode("ab", [{ from: "a", to: "b" }]);

// const a = decode("ab", [
//     { from: "a", to: "ba" },
//     { from: "b", to: "r" },
// ]);

// const a = decode("ab", [
//     { from: "b", to: "bar" },
//     { from: "ab", to: "foo" },
// ]);

// const a = decode("ab", [
//     { from: "a", to: "bar" },
//     { from: "ab", to: "foo" },
// ]);
console.log(a);
