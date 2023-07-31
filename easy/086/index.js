/**
 * 86. Банковские счета
 *
 * Некоторый банк хочет внедрить систему управления счетами клиентов, поддерживающую следующие операции:
 * Пополнение счета клиента. Снятие денег со счёта. Запрос остатка средств на счёте. Перевод денег между
 * счетами клиентов. Начисление процентов всем клиентам.
 * Вам необходимо реализовать такую систему. Клиенты банка идентифицируются именами (уникальная строка,
 * не содержащая пробелов). Первоначально у банка нет ни одного клиента. Как только для клиента проводится
 * операция пополнения, снятия или перевода денег, ему заводится счёт с нулевым балансом. Все дальнейшие
 * операции проводятся только с этим счётом. Сумма на счету может быть как положительной, так и отрицательной,
 * при этом всегда является целым числом.
 *
 * Формат ввода:
 * Входной файл содержит последовательность операций. Возможны следующие операции:
 * DEPOSIT name sum - зачислить сумму sum на счет клиента name. Если у клиента нет счета, то счет создается.
 * WITHDRAW name sum - снять сумму sum со счета клиента name. Если у клиента нет счета, то счет создается.
 * BALANCE name - узнать остаток средств на счету клиента name.
 * TRANSFER name1 name2 sum - перевести сумму sum со счета клиента name1 на счет клиента name2.
 *   Если у какого-либо клиента нет счета, то ему создается счет.
 * INCOME p - начислить всем клиентам, у которых открыты счета, p% от суммы счета.
 * Проценты начисляются только клиентам с положительным остатком на счету, если у клиента остаток отрицательный,
 * то его счет не меняется. После начисления процентов сумма на счету остается целой,
 * то есть начисляется только целое число денежных единиц. Дробная часть начисленных процентов отбрасывается.
 *
 * Формат вывода:
 * Для каждого запроса BALANCE программа должна вывести остаток на счету данного клиента.
 * Если же у клиента с запрашиваемым именем не открыт счет в банке, выведите ERROR.
 */

function getBankAccounts(commandLines) {
    const output = [];
    const clients = new Map();

    const cmdDepositWithDraw = (clnt, coins, draw = false) => {
        const sign = draw ? -1 : 1;
        if (!clients.has(clnt)) {
            clients.set(clnt, 0);
        }
        clients.set(clnt, clients.get(clnt) + Number(coins) * sign);
    };

    const cmdBalance = (clnt) => {
        if (clients.has(clnt)) {
            return clients.get(clnt);
        }
        return "ERROR";
    };

    const cmdIncome = (procent) => {
        const p = Number(procent);
        for (const [clnt, deposit] of clients.entries()) {
            if (deposit > 0) {
                clients.set(clnt, deposit + Math.floor((deposit * p) / 100));
            }
        }
    };
    commandLines.forEach((cmdLine) => {
        switch (
            cmdLine[0] //command - first of word in line
        ) {
            case "DEPOSIT":
                cmdDepositWithDraw(cmdLine[1], cmdLine[2]);
                break;
            case "WITHDRAW":
                cmdDepositWithDraw(cmdLine[1], cmdLine[2], true);
                break;
            case "BALANCE":
                output.push(cmdBalance(cmdLine[1]));
                break;
            case "TRANSFER":
                cmdDepositWithDraw(cmdLine[1], cmdLine[3], true);
                cmdDepositWithDraw(cmdLine[2], cmdLine[3]);
                break;
            case "INCOME":
                cmdIncome(cmdLine[1]);
                break;
        }
    });

    return output;
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
    const input = [];
    for (let i = 0; i < _inputLines.length; i++) {
        input.push(readArray());
    }

    const ans = getBankAccounts(input);

    console.log(ans.map(String).join("\n"));
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    // .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getBankAccounts;
