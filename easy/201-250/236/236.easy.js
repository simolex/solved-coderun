module.exports = function (participants, sports) {
    /**
     * Подобно оператору new создает экземпляр объекта,
     * используя функцию-конструктор и параметры для нее
     */
    function constructFrom(fnConstructor, participants, sports) {
        const res = {};

        fnConstructor.bind(res).call(res, participants, sports);
        Object.setPrototypeOf(res, fnConstructor.prototype);

        return res;
    }

    /**
     * Создает пары вида ["вид спорта", "имя участника"],
     * где первому виду спорта соответствует последний участник
     */
    function assignParicipants() {
        const participants = this.participants;
        const sports = this.sports;
        const orderIndexes = [];
        let i = sports.length;

        while (i--) {
            const index = i;
            orderIndexes.push(function () {
                return index;
            });
        }

        return orderIndexes.map((getSportIndex, i) => [sports[i], participants[getSportIndex()]]);
    }

    function Contest(participants, sports) {
        this.participants = participants;
        this.sports = sports;
    }

    Contest.prototype.assignParicipants = assignParicipants;

    const contest = constructFrom(Contest, participants, sports);

    return contest.assignParicipants();
};
