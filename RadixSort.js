const RadixSort = {
    _maxDigitCount: 1,
    _maxDigitCountCalculated: false,
    _sortedPart: [],
    _processingPart: [],
    _getDigit(num, place) {
        const stopMask = Math.pow(10, place - 1);
        return Math.floor(Math.abs(num) / (stopMask * 10)) % 10;
    },
    _digitCount(num) {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    },
    _mostDigits(nums) {
        let maxDigits = 0;
        for (let i = 0; i < nums.length; i++) {
            maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits;
    },
    radixSort(arrOfNums) {
        let maxDigitCount = 0; //mostDigits(arrOfNums);
        let k = 0;
        while (k < this._maxDigitCount) {
            let digitBuckets = Array.from({ length: 10 }, () => []);
            for (let i = 0; i < arrOfNums.length; i++) {
                let digit = getDigit(arrOfNums[i], k);
                digitBuckets[digit].push(arrOfNums[i]);
            }
            // New order after each loop
            arrOfNums = [].concat(...digitBuckets);
        }

        return arrOfNums;
    },
};
