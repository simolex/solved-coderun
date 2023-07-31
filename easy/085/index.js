/**
 * 85. Продажи
 * Дана база данных о продажах некоторого интернет-магазина. Каждая строка входного файла представляет
 * собой запись вида
 * Покупатель, товар, количество, где:
 * Покупатель — имя покупателя (строка без пробелов),
 * товар — название товара (строка без пробелов),
 * количество — количество приобретенных единиц товара.
 * Создайте список всех покупателей, а для каждого покупателя подсчитайте количество приобретённых им единиц
 * каждого вида товаров.
 *
 * Формат ввода:
 * Вводятся сведения о покупках в указанном формате.
 *
 * Формат вывода:
 * Выведите список всех покупателей в лексикографическом порядке, после имени каждого покупателя
 * выведите двоеточие, затем выведите список названий всех приобретенных данным покупателем товаров
 * в лексикографическом порядке, после названия каждого товара выведите количество единиц товара,
 * приобретенных данным покупателем. Информация о каждом товаре выводится в отдельной строке.
 */

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;
const xSet = new Map();

_reader.on("line", (lineStr) => {
    const line = lineStr.trim(" ").split(" ");

    if (!xSet.has(line[0])) {
        xSet.set(line[0], new Map());
    }
    if (!xSet.get(line[0]).has(line[1])) {
        xSet.get(line[0]).set(line[1], 0);
    }
    xSet.get(line[0]).set(line[1], +line[2] + xSet.get(line[0]).get(line[1]));
});

process.stdin.on("end", solve);

function partition(items, left, right) {
    let temp;
    const pivot = items[Math.floor((right + left) / 2)]; //middle element
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            temp = items[left]; //swap two elements
            items[left] = items[right];
            items[right] = temp;

            left++;
            right--;
        }
    }
    return left;
}

function quickSortRecursive(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSortRecursive(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSortRecursive(items, index, right);
        }
    }
    return items;
}

function quickSort(items) {
    return quickSortRecursive(items, 0, items.length - 1);
}

function solve() {
    let output = "";

    for (const buyer of quickSort([...xSet.keys()])) {
        output += `${buyer}:\n`;
        for (const product of quickSort([...xSet.get(buyer).keys()])) {
            output += `${product} ${xSet.get(buyer).get(product)}\n`;
        }
    }
    console.log(output);
}

// module.exports = getSales;
