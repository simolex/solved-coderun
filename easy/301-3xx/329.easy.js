module.exports = function decoder(code = "") {
    const decodeCipherT = (cipher) => {
        const numMorze = cipher.substring(1);
        const lenNumber = numMorze.length;
        const stepCount = Math.floor(lenNumber / 2);
        const numMorzeToArray = [...numMorze];

        for (let i = 0; i < stepCount; i++) {
            //swap items
            [numMorzeToArray[lenNumber - i - 1], numMorzeToArray[i]] = [
                numMorzeToArray[i],
                numMorzeToArray[lenNumber - i - 1],
            ];
        }
        return numMorzeToArray.join("");
    };

    const decodeCipherR = (cipher) => {
        let result = "";
        const lenNumber = cipher.length;
        const cipherToArray = [...cipher];
        for (let i = 1; i < lenNumber; i += 2) {
            result += cipherToArray[i];
        }
        return result;
    };
    const decodeMorze = (signal) => {
        const signalArray = [...signal];
        let number = 0;
        for (i = 4; i >= 0; i--) {
            if (signalArray[i] === "-") {
                number += number > 0 ? 2 : 0;
            }
            number += signalArray[i] === "." ? 1 : 0;
        }
        return number;
    };

    const getNumber = (cipher) => {
        let numMorze = cipher;
        const prefix = cipher.substring(0, 1);
        if (prefix === "R") numMorze = decodeCipherR(cipher);
        if (prefix === "T") numMorze = decodeCipherT(cipher);
        return decodeMorze(numMorze);
    };

    const tokensCode = [
        { fn: getNumber, regexp: "[\\.\\-RT]+" },
        { fn: (v) => "", regexp: " (?! )" },
        { fn: (v) => " ", regexp: " {3}(?! )" },
    ];

    let pos = 0;
    const getToken = () => {
        const tokenTypeCount = tokensCode.length;

        for (let i = 0; i < tokenTypeCount; i++) {
            const regexp = new RegExp(`^${tokensCode[i].regexp}`);
            const result = code.substring(pos).match(regexp);
            if (result && result[0]) {
                pos += result[0].length;
                return tokensCode[i].fn(result[0]);
            }
        }
        return "";
    };

    const codeLength = code.length;
    let decodingText = "";
    while (pos < codeLength) {
        decodingText += getToken();
    }
    return decodedText;
};
