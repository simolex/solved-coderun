const { exec } = require("child_process");
const fs = require("fs");
const solution = require(".");

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

let testValid = true;

let space = /\s+/g;

const fdLog = fs.openSync("./find.log", "a");
let count;
let a;
let b;

const p = () =>
    new Promise((resolve, reject) => {
        count = getRandomInt(10 ** 7);
        a = getRandomInt(10 ** 9);
        b = getRandomInt(10 ** 9);

        const fdOutput = fs.openSync("./000", "w");
        fs.writeSync(fdOutput, `${count}\n${a} ${b}\n`);
        fs.closeSync(fdOutput);

        exec(`"./cpp/main.exe" < 000`, (err, stdout_1) => {
            if (err) {
                reject(err.message);
                return;
            }
            const stdout_2 = solution(count, a, b);

            resolve({ stdout_1, stdout_2: stdout_2.toString() });
        });
    })
        .then(({ stdout_1, stdout_2 }) => {
            const out_1 = stdout_1.replace(space, "");
            const out_2 = stdout_2.replace(space, "");
            if (out_1 !== out_2) {
                fs.writeSync(fdLog, `${count} ${a} ${b}: ${out_1} ${out_2}\n`);
            } else return p();
            return;
        })
        .catch(console.error);

p();
