/**
 * 88. Контрольная по ударениям
 *
 * Учительница задала Пете домашнее задание — в заданном тексте расставить ударения в словах, после чего поручила Васе проверить это домашнее
 * задание. Вася очень плохо знаком с данной темой, поэтому он нашел словарь, в котором указано, как ставятся ударения в словах. К сожалению,
 * в этом словаре присутствуют не все слова. Вася решил, что в словах, которых нет в словаре, он будет считать, что Петя поставил ударения
 * правильно, если в этом слове Петей поставлено ровно одно ударение. Оказалось, что в некоторых словах ударение может быть поставлено больше,
 * чем одним способом. Вася решил, что в этом случае если то, как Петя поставил ударение, соответствует одному из приведённых в словаре вариантов,
 * он будет засчитывать это как правильную расстановку ударения, а если не соответствует, то как ошибку. Вам дан словарь, которым пользовался
 * Вася и домашнее задание, сданное Петей. Ваша задача — определить количество ошибок, которое в этом задании насчитает Вася.
 *
 * Формат ввода:
 * Вводится сначала число N — количество слов в словаре (0 ≤ N ≤ 20000). Далее идет N строк со словами из словаря. Каждое слово состоит не более
 * чем из 30 символов. Все слова состоят из маленьких и заглавных латинских букв. В каждом слове заглавная ровно одна буква — та, на которую
 * попадает ударение. Слова в словаре расположены в алфавитном порядке. Если есть несколько возможностей расстановки ударения в одном и том же
 * слове, то эти варианты в словаре идут в произвольном порядке. Далее идет упражнение, выполненное Петей. Упражнение представляет собой строку
 * текста, суммарным объемом не более 300000 символов. Строка состоит из слов, которые разделяются между собой ровно одним пробелом. Длина
 * каждого слова не превышает 30 символов. Все слова состоят из маленьких и заглавных латинских букв (заглавными обозначены те буквы, над которыми
 * Петя поставил ударение). Петя мог по ошибке в каком-то слове поставить более одного ударения или не поставить ударения вовсе.
 *
 * Формат вывода:
 * Выведите количество ошибок в Петином тексте, которые найдет Вася.
 *
 * Примечания к примерам тестов:
 * 1) В слове cannot, согласно словарю возможно два варианта расстановки ударения. Эти варианты в словаре могут быть перечислены в любом
 * порядке (т.е. как сначала cAnnot, а потом cannOt, так и наоборот).Две ошибки, совершенные Петей — это слова be (ударение вообще не поставлено)
 * и fouNd (ударение поставлено неверно). Слово thE отсутствует в словаре, но поскольку в нем Петя поставил ровно одно ударение, признается
 * верным.
 * 2) Неверно расставлены ударения во всех словах, кроме The (оно отсутствует в словаре, в нем поставлено ровно одно ударение). В остальных
 * словах либо ударные все буквы (в слове PAGE), либо не поставлено ни одного ударения.
 *
 */

function countErrors(dict, S) {
    let error = 0;
    const dictionary = new Map();

    const isAccent = (word, index) => word.charAt(index) >= "A" && word.charAt(index) <= "Z";

    const createMask = (word) => {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask <<= 1;
            if (isAccent(word, i)) {
                mask = mask | 1;
            }
        }
        return mask;
    };

    const saveMaskToDict = (word, mask) => {
        word = word.toLowerCase();
        if (dictionary.has(word)) {
            dictionary.get(word)[0] |= mask;
        } else {
            dictionary.set(word, [mask]);
        }
    };

    const existWord = (word) => dictionary.has(word.toLowerCase());

    const existAccent = (word, index) => {
        word = word.toLowerCase();
        if (dictionary.has(word)) {
            const mask = 1 << (word.length - index - 1);
            if ((dictionary.get(word)[0] & mask) > 0) {
                return true;
            }
        }
        return false;
    };

    if (S.length > 0) {
        dict.forEach((word) => {
            const mask = createMask(word);
            saveMaskToDict(word, mask);
        });

        const setOfWord = S.split(" ");
        setOfWord.forEach((word) => {
            let countError = 0;
            let countAccent = 0;

            if (existWord(word)) {
                for (let i = 0; i < word.length; i++) {
                    if (isAccent(word, i)) {
                        countAccent++;
                        if (!existAccent(word, i)) {
                            countError++;
                        }
                    }
                }

                if ((countAccent > 0 && countError > 0) || countAccent === 0 || countAccent > 1) {
                    error++;
                }
            } else {
                for (let i = 0; i < word.length; i++) {
                    if (isAccent(word, i)) {
                        countAccent++;
                    }
                }
                if (countAccent === 0 || countAccent > 1) {
                    error++;
                }
            }
        });
    }

    return error;
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
    const n = readNumber();
    const dict = [];
    for (let i = 0; i < n; i++) {
        dict.push(readLine());
    }
    const S = readLine();

    const ans = countErrors(dict, S);

    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
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

module.exports = countErrors;
