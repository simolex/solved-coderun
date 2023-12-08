const createCountdown = function (n) {
    let value = 0;
    if (Number.isInteger(n) && n > 0) {
        value = n + 1;
    }

    return () => {
        if (value === 0) return 0;
        return --value;
    };
};
