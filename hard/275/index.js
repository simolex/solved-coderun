const Good = {
    type: "good",
    name: "", // string;
    comments: [], // Comment[];
    related: [] // Good[];
};

const Comment = {
    type: "comment",
    text: "", // string;
    comments: [], // Comment[];
    parent: {} // Good | Comment;
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
    const getSortField = (obj) => (obj.type === "good" ? obj.name : obj.text);
    const sortFn = (a, b) => (getSortField(a) > getSortField(b) ? 1 : getSortField(a) < getSortField(b) ? -1 : 0);
    findedObjects.sort(sortFn);

    const getComments = (input, obj, tabStr, level) => {
        input += `${tabStr.repeat(level)}- ${obj.text}${
            obj.parent.type === "good" ? ` - про ${obj.parent.name}` : ""
        }\n`;
        let output =
            input + obj.comments.sort(sortFn).reduce((out, sub) => out + getComments("", sub, tabStr, level + 1), "");

        return output;
    };

    let commentsInMD = "";
    let goodsInMD = "";

    findedObjects.forEach((obj) => {
        if (obj.type === "comment" && obj.vizited !== "2" && obj.parent.type === "good") {
            let record = getComments("", obj, "  ", 0);
            commentsInMD += record;
            obj.vizited = "2";
        }

        if (obj.type === "good" && obj.vizited !== "2") {
            console.log("====> ", obj);
            goodsInMD += `- ${obj.name}\n${obj.related
                .sort(sortFn)
                .map((n) => `  * ${n.name}\n`)
                .join("")}`;
            obj.vizited = "2";
        }
    });

    // console.log(goodsInMD);
    const result = `${commentsInMD.length > 0 ? `## Отзывы\n\n${commentsInMD}\n` : ""}${
        goodsInMD.length > 0 ? `## Товары\n\n${goodsInMD}` : ""
    }`;
    return result;
};
