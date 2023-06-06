class Band {
    name; //: string;
    friends = []; //: Band[];
    genres = []; //: Genre[];
}

class Genre {
    name; //: string;
    bands = []; //: Band[];
    subgenres = []; //: Genre[];
    parent; //: Genre | null;
}

/**
 * @param {Band|Genre} data - ссылка на группу или жанр,
 * из которой нужно восстановить все возможные данные
 * @return {string}
 */

module.exports = function (data) {
    // ваш код
    return "…" + data instanceof Genre;
};
