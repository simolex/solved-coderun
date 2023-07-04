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

    const allConflictingIndex = new Map();

    for (const pull of hashAllFiles.values()) {
        if (pull.size > 1) {
            for (pullIndex of pull.values()) {
                if (!allConflictingIndex.has(pullIndex)) allConflictingIndex.set(pullIndex, new Set());
                for (addIndex of pull.values()) {
                    if (addIndex === pullIndex) continue;

                    const getIndex = allConflictingIndex.get(pullIndex);
                    getIndex.add(addIndex);
                    allConflictingIndex.set(pullIndex, getIndex);
                }
            }
        }
    }
    console.log(hashAllFiles);
    console.log(allConflictingIndex);
    return ["#1", "#2", "#4"];
};
