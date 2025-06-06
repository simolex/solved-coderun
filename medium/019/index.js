/**
 * 19. Значение логического выражения
 *
 * Задано логическое выражение. Необходимо вычислить его значение.
 * В выражении могут встречаться знаки ! (отрицание), & (логическое «и»), | (логическое «или»), ̂
 *  (XOR — «исключающее ИЛИ», «ровно одно из двух — истина») и скобки.
 * Самый высокий приоритет у отрицания, меньше – у &, операции | и ̂ имеют самый низкий приоритет (одинаковый)
 * и вычисляются слева направо. Все числа в выражении либо 0, либо 1.
 *
 * Формат ввода:
 * В первой строке вводится выражение. Его длина не превосходит 100 знаков.
 * После выражения идет переход на новую строчку.
 *
 * Формат вывода:
 * Выведите значение этого выражения (0 или 1).
 *
 * Примечания:
 */
class Token {
    type;
    text;
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}
class TokenType {
    name;
    regexp;
    priority;
    constructor(name, regexp, priority = -1) {
        this.name = name;
        this.regexp = regexp;
        this.priority = priority;
    }
}

const listTokenType = {
    NUMBER: new TokenType("NUMBER", "[01]"),
    NEGATION: new TokenType("NEGATION", "\\!", 3),
    AND: new TokenType("AND", "\\&", 2),
    OR: new TokenType("OR", "\\|", 1),
    XOR: new TokenType("XOR", "\\^", 1),
    OPEN_PARENTHESIS: new TokenType("OPEN_PARENTHESIS", "\\("),
    CLOSE_PARENTHESIS: new TokenType("CLOSE_PARENTHESIS", "\\)"),
    SPACE: new TokenType("SPACE", "[ \\n\\t\\r]")
};

class Lexer {
    text;
    position = 0;
    listTokens = [];
    constructor(text) {
        this.text = text;
    }
    clearSpace() {
        this.listTokens = this.listTokens.filter((token) => token.type.name !== "SPACE");
    }

    validate() {
        for (let i = 0; i < this.listTokens.length; i++) {
            if (
                (i + 1 < this.listTokens.length &&
                    this.listTokens[i].type.name === "OPEN_PARENTHESIS" &&
                    this.listTokens[i + 1].type.name !== "NUMBER" &&
                    this.listTokens[i + 1].type.name !== "OPEN_PARENTHESIS" &&
                    this.listTokens[i + 1].type.name !== "NEGATION") ||
                (i > 0 &&
                    this.listTokens[i].type.name === "CLOSE_PARENTHESIS" &&
                    this.listTokens[i - 1].type.name !== "NUMBER" &&
                    this.listTokens[i - 1].type.name !== "CLOSE_PARENTHESIS" &&
                    this.listTokens[i + 1].type.name !== "NEGATION") ||
                (i < this.listTokens.length &&
                    ["NEGATION", "AND", "OR", "XOR"].includes(this.listTokens[i].type.name) &&
                    (i + 1 === this.listTokens.length || this.listTokens[i + 1].type.name === "CLOSE_PARENTHESIS"))
            ) {
                throw new Error("wrong parenthesis no Valid");
            }
        }
    }

    lexAnalyzer() {
        while (this.nextToken()) {}

        this.clearSpace();
        this.validate();

        return this.listTokens;
    }

    nextToken() {
        if (this.position >= this.text.length) {
            return false;
        }

        const kindsOfTokenTypes = Object.values(listTokenType);

        for (let i = 0; i < kindsOfTokenTypes.length; i++) {
            const tokenType = kindsOfTokenTypes[i];
            const regexp = new RegExp(`^${tokenType.regexp}`);
            const result = this.text.substring(this.position).match(regexp);

            if (result && result[0]) {
                const token = new Token(tokenType, result[0]);
                this.position += result[0].length;
                this.listTokens.push(token);
                return true;
            }
        }
        throw new Error("wrong Unknown Token");
    }
}

class Parser {
    tokens;
    position = 0;
    stackOperands = [];
    postfixTokens = [];
    constructor(tokens) {
        this.tokens = tokens;
    }

    parseExpression(currentToken) {
        switch (currentToken.type.name) {
            case "OPEN_PARENTHESIS":
                this.stackOperands.push(currentToken);
                break;
            case "CLOSE_PARENTHESIS":
                while (
                    this.stackOperands.length > 0 &&
                    this.stackOperands[this.stackOperands.length - 1].type.name !== "OPEN_PARENTHESIS"
                ) {
                    this.postfixTokens.push(this.stackOperands.pop());
                }
                if (
                    this.stackOperands.length === 0 ||
                    this.stackOperands[this.stackOperands.length - 1].type.name !== "OPEN_PARENTHESIS"
                ) {
                    throw new Error("wrong CLOSE_PARENTHESIS");
                }
                this.stackOperands.pop();
                break;
            default:
                while (
                    this.stackOperands.length > 0 &&
                    this.stackOperands[this.stackOperands.length - 1].type.priority >= currentToken.type.priority
                ) {
                    this.postfixTokens.push(this.stackOperands.pop());
                }
                this.stackOperands.push(currentToken);
                break;
        }
    }

    parse() {
        while (this.position < this.tokens.length) {
            const currentToken = this.tokens[this.position];
            if (currentToken.type.name === "NUMBER") {
                this.postfixTokens.push(currentToken);
            } else {
                this.parseExpression(currentToken);
            }
            this.position++;
        }
        while (this.stackOperands.length > 0) {
            const currentToken = this.stackOperands.pop();
            if (currentToken.type.name === "OPEN_PARENTHESIS") {
                throw new Error("wrong not closed parenthesis");
            }
            this.postfixTokens.push(currentToken);
        }
        return this.postfixTokens;
    }
}

class Calculator {
    tokens;
    stackNumbers = [];
    position = 0;
    constructor(tokens) {
        this.tokens = tokens;
    }

    calcUnaryExpression(currentToken) {
        if (this.stackNumbers.length === 0) {
            throw new Error("wrong Low Calc Stack");
        }
        this.stackNumbers.push(~this.stackNumbers.pop() & 1);
    }

    calcBinaryExpression(currentToken) {
        if (this.stackNumbers.length < 2) {
            throw new Error("wrong Low Calc Stack");
        }

        const rightValue = this.stackNumbers.pop();
        const leftValue = this.stackNumbers.pop();

        switch (currentToken.type.name) {
            case "OR":
                this.stackNumbers.push(leftValue | rightValue);
                break;
            case "AND":
                this.stackNumbers.push(leftValue & rightValue);
                break;
            case "XOR":
                this.stackNumbers.push(leftValue ^ rightValue);
                break;
        }
    }

    getResult() {
        while (this.position < this.tokens.length) {
            const currentToken = this.tokens[this.position];

            if (currentToken.type.name === "NUMBER") {
                this.stackNumbers.push(Number(currentToken.text));
            } else if (currentToken.type.name === "NEGATION") {
                this.calcUnaryExpression(currentToken);
            } else {
                this.calcBinaryExpression(currentToken);
            }
            this.position++;
        }
        if (this.stackNumbers.length !== 1) {
            throw new Error("wrong big calc stack");
        }
        return this.stackNumbers.pop();
    }
}

function calculateExpression(text) {
    let result;
    try {
        const lexer = new Lexer(text);
        const preparse = lexer.lexAnalyzer();
        const parser = new Parser(preparse);
        const parsedTokens = parser.parse();
        const calc = new Calculator(parsedTokens);
        result = calc.getResult();
    } catch (e) {
        return;
    }

    return result;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const text = readString();

    const result = calculateExpression(text);

    console.log(result !== undefined ? result : "WRONG");
}

function readAllString() {
    var arr = _inputLines.map((line) => line.trim());

    return arr;
}

function readString() {
    var str = _inputLines[_curLine].trim(" ");
    _curLine++;
    return str;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}
function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readBigIntArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readStringArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0);
    _curLine++;
    return arr;
}

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = calculateExpression;
