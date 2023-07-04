/**
 *  type PullRequest = {
 *          - Массив имён изменённых файлов (отсортирован лексикографически)
 *          - Длина массива N: 1 <= N <= 1000
 *      files: string[],
 *
 *          - Уникальный идентификатор реквеста в VCS
 *      id: string,
 *
 *          - Unix-timestamp создания пулл-реквеста
 *      created: number,
 *  };
 */

/**
 * @param {PullRequest[]} pullRequests массив PR, отсортированных по времени создания
 * @returns {string[]} идентификаторы реквестов в порядке мёржа
 */
module.exports = function (pullRequests) {
    const dissidents = [];
    const hashAllFiles = new Map();
    const countFilesInPulls = [];

    for (const [index, pull] of pullRequests.entries()) {
        countFilesInPulls[index] = pull.files.length;
        for (const file of pull.files) {
            if (!hashAllFiles.has(file)) {
                const newFile = new Set();
                newFile.add(index);
                hashAllFiles.set(file, newFile);
            } else {
                const getFile = hashAllFiles.get(file);
                getFile.add(index);
                hashAllFiles.set(file, getFile);
            }
        }
    }
    console.log(hashAllFiles, countFilesInPulls);
    return ["#1", "#2", "#3"];
};
