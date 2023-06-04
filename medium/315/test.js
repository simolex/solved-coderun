/**
 *  Песочница для решения:
 */

("use strict");

((global) => {
    const timeout = 20;

    const _async = (fn, cb) => {
        setTimeout(() => {
            cb(fn());
        }, Math.random() * timeout);
    };

    const Folder = function (a = []) {
        if (!new.target) {
            return new Folder(a);
        }

        this.read = (index, cb) => _async(() => a[index], cb);
        this.size = (cb) => _async(() => a.length, cb);
    };

    Object.freeze(Folder);
    global.Folder = Folder;
})(typeof window === "undefined" ? global : window);

const input = Folder([
    "file",
    "ffffile",
    Folder(["file"]),
    Folder(["fiiile"]),
    Folder([{}, null, "file", "ffiillee", "ffiillee"]),
    Folder([Folder(["filllle", "file", null]), {}, Folder([])])
]);

// проверка решения
solution(input).then((result) => {
    const answer = ["ffffile", "ffiillee", "ffiillee", "fiiile", "filllle"];
    const isEqual = String(answer) === String(result);

    if (isEqual) {
        console.log("OK");
    } else {
        console.log("WRONG");
    }
});

async function solution(input) {
    const corruptedFiles = [];
    const queueFolders = [];
    queueFolders.push(input);

    const isLosted = (value) => !value || (Object.keys(value).length === 0 && value.constructor === Object);
    const isCorruped = (file) => file.match(/(.)(?=\1)/i) !== null;
    const getSize = (folder) => new Promise((resolve) => folder.size((size) => resolve(size)));
    const getFile = (folder, index) => new Promise((resolve) => folder.read(index, (file) => resolve(file)));

    while (queueFolders.length > 0) {
        const currentFolder = queueFolders.pop();
        const filesCount = await getSize(currentFolder);
        //console.log(filesCount);

        for (let i = 0; i < filesCount; i++) {
            const file = await getFile(currentFolder, i);

            if (!isLosted(file)) {
                if (file instanceof Folder) {
                    queueFolders.push(file);
                } else {
                    if (isCorruped(file)) corruptedFiles.push(file);
                }
            }
        }
    }
    corruptedFiles.sort();
    return corruptedFiles;
}
