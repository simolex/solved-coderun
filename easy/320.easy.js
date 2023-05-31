function decode(message = "", replaces = []) {
    const textLength = message.length;
    let decodedMessage = "";
    const lettersMap = [];

    replaces.forEach((replacer, index) => {
        const matches = message.matchAll(new RegExp(replacer.from, "g"));
        for (const match of matches) {
            const letterPosition = match.index;
            if (!lettersMap[letterPosition]) lettersMap[letterPosition] = [];
            lettersMap[letterPosition].push(index);
        }
    });

    let pos = 0;
    while (pos < textLength) {
        if (lettersMap[pos] === undefined) {
            decodedMessage += message.charAt(pos);
            pos++;
            continue;
        } else {
            let token;
            if (lettersMap[pos].length === 1) {
                const indexOnceToken = lettersMap[pos][0];
                token = replaces[indexOnceToken];
            } else {
                const indexLastToken = lettersMap[pos].pop();
                token = replaces[indexLastToken];
            }
            decodedMessage += token.to;
            pos += token.from.length;
        }
    }

    return decodedMessage;
}

module.exports = { decode };
