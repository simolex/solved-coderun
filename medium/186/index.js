/*
interface Commit {
    id: string; // уникальный идентификатор коммита
    timestamp: number; // время создания в миллисекундах
    parents?: string[]; // массив id родительских коммитов
    message?: string; // сообщение коммита
    branches?: string[]; // массив имён веток
}
*/

function getLastCommonCommitMessage(commits, branches) {
    return "add layout";
}

module.exports = { getLastCommonCommitMessage };
