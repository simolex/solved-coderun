function calculateAnswer(n, points) {
    let minRaduis = 1e9;



    const step = (count, next, minX, minY, maxX, maxY) => {
        if (count >= 6) {
            const d = Math.max((maxX - minX), (maxY - minY));
            minRaduis = Math.min(minRaduis, d / 2);
            return;
        }

        for (let i = next; i < 36; i++) {
            const [x, y] = points[i];
            step(
                count + 1,
                i + 1,
                Math.min(minX, x),
                Math.min(minY, y),
                Math.max(maxX, x),
                Math.max(maxY, y),
            )
        }
    }
    step(0, 0, 1e9, 1e9, -1e9, -1e9);
    return minRaduis;
}

const fs = require('fs');

class FastInput {
    constructor(filename) {
        this.tokens = fs.readFileSync(filename, 'utf8')
            .trim()
            .split(/\s+/);
        this.index = 0;
    }

    readToken() {
        return this.tokens[this.index++];
    }

    readInt() {
        return parseInt(this.readToken(), 10);
    }

    readLong() {
        return BigInt(this.readToken());
    }

    readTokens(n) {
        const res = this.tokens.slice(this.index, this.index + n);
        this.index += n;
        return res;
    }

    readIntArray(n) {
        const res = new Array(n);

        for (let i = 0; i < n; i++) {
            res[i] = this.readInt();
        }

        return res;
    }
}

// ввод/вывод
// не изменяйте сигнатуру метода
function solution() {
    const inputFile = './data.txt';
    const outputFile = './output.txt';

    const input = new FastInput(inputFile);

    const answer = []

    for (let i = 0; i < 10; i++) {
        const p36 = []
        for (let j = 0; j < 36; j++) {

            p36.push([+input.readToken(), +input.readToken()]);
        }
        console.log(p36);

        answer.push(calculateAnswer(36, p36));
    }
    // console.log(answer);



    fs.writeFileSync(outputFile, `${answer.join('\n')}\n`);
}

module.exports = solution;

solution()