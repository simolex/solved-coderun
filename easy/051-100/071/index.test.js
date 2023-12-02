const solution = require(".");

describe("71. Determine type sequence", () => {
    test("test-1", () => {
        const result = solution([-530, -530, -530, -530, -530, -530]);
        expect(result).toEqual("CONSTANT");
    });
    test("test-2", () => {
        const result = solution([-530, 530]);
        expect(result).toEqual("ASCENDING");
    });
    test("test-3", () => {
        const result = solution([-530, -530, 530]);
        expect(result).toEqual("WEAKLY ASCENDING");
    });
    test("test-4", () => {
        const result = solution([530, -530]);
        expect(result).toEqual("DESCENDING");
    });
    test("test-5", () => {
        const result = solution([530, -530, -530]);
        expect(result).toEqual("WEAKLY DESCENDING");
    });
    test("test-6", () => {
        const result = solution([-530, 530, -530]);
        expect(result).toEqual("RANDOM");
    });
});
