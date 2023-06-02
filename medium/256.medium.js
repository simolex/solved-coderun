//const getIt()

module.exports = function (content) {
    // const describe = /^describe.*?(?=\n)\n((.+\n)+)\}\);.*?(?=\n)$/gim;
    const end = /(?<=\s*?\}\);.*?\n)(\s*?\}\);.*?)(?=\n)/gim;

    const endTag = end.exec(content);
    // ваше решение

    return con;
};

/**
 *  /describe.*?(?=\n)/gi - старт describe
 *  /^\s*it(\.skip)?.+(?=\n)$/gim - test start
 *  /^\s*?\}\);.*?(?=\n)$/gmi - end test
 */
