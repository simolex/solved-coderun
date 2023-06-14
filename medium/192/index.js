const Band = {
    type: "band",
    name: "", //: string;
    friends: [], //: Band[];
    genres: [], //: Genre[];
};

const Genre = {
    type: "genre",
    name: "", //: string;
    bands: [], //: Band[];
    subgenres: [], //: Genre[];
    parent: null, //: Genre | null;
};

/**
 * @param {Band|Genre} data - ссылка на группу или жанр,
 * из которой нужно восстановить все возможные данные
 * @return {string}
 */

module.exports = function (data) {
    const findedObjects = [];
    const stackPath = [data];
    let currentObject;
    //currentObject.from = null;
    const addToPath = (obj) => {
        if (!obj.vizited && obj.vizited !== "1") {
            stackPath.push(obj);
        }
    };
    while (stackPath.length > 0) {
        currentObject = stackPath.pop();
        currentObject.vizited = "1";

        if (currentObject && currentObject.type === "band") {
            findedObjects.push(currentObject);

            if (currentObject.friends.length > 0) {
                currentObject.friends.forEach((val) => addToPath(val));
            }
            if (currentObject.genres.length > 0) {
                currentObject.genres.forEach((val) => addToPath(val));
            }
        }
        if (currentObject && currentObject.type === "genre") {
            if (currentObject.parent === null) {
                findedObjects.push(currentObject);
            }
            if (currentObject.bands.length > 0) {
                currentObject.bands.forEach((val) => addToPath(val));
            }
            if (currentObject.subgenres.length > 0) {
                currentObject.subgenres.forEach((val) => addToPath(val));
            }
            if (currentObject.parent !== null) {
                addToPath(currentObject.parent);
            }
        }
    }

    findedObjects.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

    let genreInMD = "";
    let bandsInMD = "";

    const getGenre = (input, obj, tabStr, level) => {
        input += `${tabStr.repeat(level)}- ${obj.name}${obj.bands.length > 0 ? ": " : ""}${obj.bands
            .map((n) => n.name)
            .join(", ")}\n`;
        let output =
            input +
            obj.subgenres
                .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
                .reduce((out, sub) => out + getGenre("", sub, tabStr, level + 1), "");

        return output;
    };

    findedObjects.forEach((obj) => {
        if (obj.type === "genre" && obj.vizited !== "2") {
            let record = getGenre("", obj, "  ", 0);
            genreInMD += record;
            obj.vizited = "2";
        }

        if (obj.type === "band" && obj.vizited !== "2") {
            bandsInMD += `- ${obj.name}${obj.friends.length > 0 ? ", друзья: " : ""}${obj.friends
                .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
                .map((n) => n.name)
                .join(", ")}\n`;
            obj.vizited = "2";
        }
    });

    const result = `${genreInMD.length > 0 ? `## Жанры\n\n${genreInMD}\n` : ""}${
        bandsInMD.length > 0 ? `## Группы\n\n${bandsInMD}` : ""
    }`;

    return result;
};
