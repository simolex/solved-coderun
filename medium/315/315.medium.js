/**
 *
 * @param {*} input
 * @returns
 *
 *  /(.)(?=\1)/gi - поиск дублей
 */

module.exports = async function (input) {
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
};
