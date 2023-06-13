const Band = {
    type: "band",
    name: "", //: string;
    friends: [], //: Band[];
    genres: [] //: Genre[];
};

const Genre = {
    type: "genre",
    name: "", //: string;
    bands: [], //: Band[];
    subgenres: [], //: Genre[];
    parent: null //: Genre | null;
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
        findedObjects.push(currentObject);
        if (currentObject.type === "band") {
            if (currentObject.friends.length > 0) {
                currentObject.friends.forEach((val) => addToPath(val));
            }
            if (currentObject.genres.length > 0) {
                currentObject.genres.forEach((val) => addToPath(val));
            }
        }
        if (currentObject.type === "genre") {
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

    // TODO markdown output

    console.log("==>", findedObjects);
    return data instanceof Band;
};
