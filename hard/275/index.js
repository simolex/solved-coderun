const Good = {
    type: "good",
    name: "", // string;
    comments: [], // Comment[];
    related: [], // Good[];
};

const Comment = {
    type: "comment",
    text: "", // string;
    comments: [], // Comment[];
    parent: {}, // Good | Comment;
};

/**
 * @param {Good|Comment} data - ссылка на товар, отзыв или ответ на отзыв,
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
    const addToFinded = (obj) => {
        if (!findedObjects.includes(obj)) findedObjects.push(obj);
    };
    while (stackPath.length > 0) {
        currentObject = stackPath.pop();
        currentObject.vizited = "1";

        addToFinded(currentObject);

        if (currentObject && currentObject.type === "good") {
            if (currentObject.comments.length > 0) {
                currentObject.comments.forEach((val) => addToPath(val));
            }
            if (currentObject.related.length > 0) {
                currentObject.related.forEach((val) => addToPath(val));
            }
        }
        if (currentObject && currentObject.type === "comment") {
            // addToFinded(currentObject.parent);

            if (currentObject.comments.length > 0) {
                currentObject.comments.forEach((val) => addToPath(val));
            }

            if (currentObject.parent) {
                addToPath(currentObject.parent);
            }
        }
    }
    console.log(findedObjects);
    return "…";
};
