const sumExcept = (arr, from, count) => {
    const lenArray = arr.length;
    from = Number.isInteger(from) && from > 0 ? from : 0;
    from = from >= lenArray ? lenArray : from;
    count = Number.isInteger(count) && count > 0 ? count : 0;

    let sum = 0;
    for (let i = 0; i < from; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
        }
    }

    if (from + count < lenArray) {
        for (let i = from + count; i < lenArray; i++) {
            if (Number.isInteger(arr[i])) {
                sum += arr[i];
            }
        }
    }
    return sum;
};

console.log(sumExcept([1, 9, 8, 4], 1, 5));
