const getBankAccounts = require(".");

describe("86. Bank accounts", () => {
    test("test-1", () => {
        const result = getBankAccounts([
            ["DEPOSIT", "Ivanov", "100"],
            ["INCOME", "5"],
            ["BALANCE", "Ivanov"],
            ["TRANSFER", "Ivanov", "Petrov", "50"],
            ["WITHDRAW", "Petrov", "100"],
            ["BALANCE", "Petrov"],
            ["BALANCE", "Sidorov"]
        ]);
        expect(result).toEqual([105, -50, "ERROR"]);
    });
    test("test-2", () => {
        const result = getBankAccounts([
            ["BALANCE", "Ivanov"],
            ["BALANCE", "Petrov"],
            ["DEPOSIT", "Ivanov", "100"],
            ["BALANCE", "Ivanov"],
            ["BALANCE", "Petrov"],
            ["DEPOSIT", "Petrov", "150"],
            ["BALANCE", "Petrov"],
            ["DEPOSIT", "Ivanov", "10"],
            ["DEPOSIT", "Petrov", "15"],
            ["BALANCE", "Ivanov"],
            ["BALANCE", "Petrov"],
            ["DEPOSIT", "Ivanov", "46"],
            ["BALANCE", "Ivanov"],
            ["BALANCE", "Petrov"],
            ["DEPOSIT", "Petrov", "14"],
            ["BALANCE", "Ivanov"],
            ["BALANCE", "Petrov"]
        ]);
        expect(result).toEqual(["ERROR", "ERROR", 100, "ERROR", 150, 110, 165, 156, 165, 156, 179]);
    });
    test("test-2", () => {
        const result = getBankAccounts([
            ["BALANCE", "a"],
            ["BALANCE", "b"],
            ["DEPOSIT", "a", "100"],
            ["BALANCE", "a"],
            ["BALANCE", "b"],
            ["WITHDRAW", "a", "20"],
            ["BALANCE", "a"],
            ["BALANCE", "b"],
            ["WITHDRAW", "b", "78"],
            ["BALANCE", "a"],
            ["BALANCE", "b"],
            ["WITHDRAW", "a", "784"],
            ["BALANCE", "a"],
            ["BALANCE", "b"],
            ["DEPOSIT", "b", "849"],
            ["BALANCE", "a"],
            ["BALANCE", "b"]
        ]);
        expect(result).toEqual(["ERROR", "ERROR", 100, "ERROR", 80, "ERROR", 80, -78, -704, -78, -704, 771]);
    });
});
