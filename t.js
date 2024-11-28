// через объект O(n)-сложность, O(n)-память
function withoutRepeats_1(arr) {
    const mapArr = arr.reduce((map, v) => {
        if (!map[v]) map[v] = 1;
        else map[v]++;

        return map;
    }, {});
    const result = [];

    for (let value in mapArr) {
        if (mapArr[value] === 1) {
            result.push(value);
        }
    }
    return result;
}

// через Map O(n)-сложность, O(n)-память
function withoutRepeats_2(arr) {
    const mapNumbers = new Map();
    arr.forEach((v) => {
        if (!mapNumbers.has(v)) {
            mapNumbers.set(v, { cnt: 0 });
        }
        mapNumbers.get(v).cnt++;
    });
    return [...mapNumbers.entries()].filter(([_, count]) => count.cnt === 1).map(([key]) => key);
}

// линейный обход  O(N logN)-сложность, O(n)-память
function withoutRepeats_3(arr) {
    if (arr.length > 0) {
        arr.sort((a, b) => a - b);

        const result = [];

        for (let i = 1; i < arr.length; i++) {
            while (i < arr.length && arr[i - 1] === arr[i]) {
                i++;
            }
            if (i + 1 === arr.length || arr[i + 1] !== arr[i]) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    return [];
}

function withoutRepeats_4(arr) {
    const getNext = (result, level) => {
        while (level < arr.length && arr[level - 1] === arr[level]) {
            level++;
        }
        if (level + 1 === arr.length || arr[level + 1] !== arr[level]) {
            result.push(arr[level]);
        }
        if (level < arr.length) getNext(result, level + 1);

        return result;
    };

    if (arr.length > 0) {
        arr.sort((a, b) => a - b);
        return getNext([], 1);
    }
    return [];
}

function withoutRepeats_5(arr) {
    const getNext = (result, level) => {
        let isDown;
        if (level < arr.length && arr[level - 1] === arr[level]) {
            isDown = true;
            // level++;
            getNext(result, level + 1);
            isDown = false;
        }
        if ((isDown && level + 1 === arr.length) || arr[level + 1] !== arr[level]) {
            result.push(arr[level]);
        }
        return result;
    };

    if (arr.length > 0) {
        arr.sort((a, b) => a - b);
        return getNext([], 1);
    }
    return [];
}

console.log(withoutRepeats_5([1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7]));

let arr1 = [
    { id: 2, name: "Nick" },
    { id: 5, name: "Jonh" },
    { id: 6, name: "Bob" },
    { id: 9, name: "Sam" },
];

let arr2 = [
    { id: 1, name: "Scot" },
    { id: 2, name: "Nick" },
    { id: 3, name: "Alex" },
    { id: 5, name: "Jonh" },
    { id: 6, name: "Bob" },
    { id: 8, name: "Stan" },
];

function filtredUsers(arr1, arr2) {
    const set_1 = arr1.reduce((set, obj) => set.add(obj.id), new Set());
    return arr2.filter((obj) => !set_1.has(obj.id));
}

console.log(filtredUsers(arr1, arr2));
