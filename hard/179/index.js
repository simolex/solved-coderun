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
        } else {
        }
    }
    const pullList = [-1];
    const ratingList = [0];
    const ratingPath = [-1];
    let globalMaxIndex = 0;
    for (const [i, testIndex] of allConflictingIndex.entries()) {
        let currentMax = 0;
        let pathFromIndex = 0;
        for (const [slot, rate] of ratingList.entries()) {
            const newRate = rate + countFilesInPulls[i];

            const weightConflict = allConflictingIndex.has(pullList[slot])
                ? allConflictingIndex.get(pullList[slot]).has(i)
                    ? countFilesInPulls[pullList[slot]]
                    : 0
                : 0;

            if (currentMax < newRate - weightConflict) {
                currentMax = newRate - weightConflict;
                pathFromIndex = slot;
            }
        }
        if (currentMax > ratingList[globalMaxIndex]) globalMaxIndex = ratingList.length;
        pullList.push(i);
        ratingList.push(currentMax);
        ratingPath.push(pathFromIndex);
    }

    let currentPointPath = globalMaxIndex;
    const selectedPulls = new Set();
    while (ratingPath[currentPointPath] >= 0) {
        selectedPulls.add(pullRequests[pullList[currentPointPath]].id);
        allConflictingIndex.delete(pullList[currentPointPath]);
        currentPointPath = ratingPath[currentPointPath];
    }

    return pullRequests.filter((PullRequest, i) => !allConflictingIndex.has(i)).map((v) => v.id);
};
