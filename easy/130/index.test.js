const getHistogram = require(".");

describe("130. histogram", () => {
    test("test", () => {
        const result = getHistogram(["Hello, world!"]);
        expect(result).toEqual(["     #   ", "     ##  ", "#########", "!,Hdelorw"]);
    });
    test("test", () => {
        const result = getHistogram([
            "Twas brillig, and the slithy toves",
            "Did gyre and gimble in the wabe;",
            "All mimsy were the borogoves,",
            "And the mome raths outgrabe."
        ]);
        expect(result).toEqual([
            "         #              ",
            "         #              ",
            "         #              ",
            "         #              ",
            "         #              ",
            "         #         #    ",
            "         #  #      #    ",
            "      #  # ###  ####    ",
            "      ## ###### ####    ",
            "      ##############    ",
            "      ##############  ##",
            "#  #  ############## ###",
            "########################",
            ",.;ADTabdeghilmnorstuvwy"
        ]);
    });
});
