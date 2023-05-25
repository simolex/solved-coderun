exports.createCountdown = (n) => {
    let value = n + 1;

    return () => {
        if (value === 0) return 0;
        return --value;
    };
};
