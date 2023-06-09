const waitPause = (ms) => new Promise((r) => setTimeout(r, ms));

const startSensor = (wait, racerProfile, checkpoint, losting, finished) => {
    const waitCheckpoint = (status) => {
        if (status && status === "connection lost") {
            losting(wait, racerProfile, checkpoint);
            return { name: racerProfile.name, checkpoint, error: "connection lost" };
        } else {
            racerProfile.checkList.push(checkpoint);
            if (finished) finished(racerProfile.name);
            racerProfile.sensorsCount--;
            return { name: racerProfile.name, checkpoint };
        }
    };

    wait(racerProfile.name, checkpoint, waitCheckpoint);
};

module.exports = async function winners(wait, pushResult, STREET_RACERS, N) {
    const allSensors = [];
    const finished = [];
    const racers = {};

    const existFinish = (name) => {
        finished.push(name);

        const result = finished.reduce((juryData, name) => {
            const checkinsOfRacer = racers[name].checkList;

            let test = true;
            for (let i = 0; i < N && test; i++) {
                if (checkinsOfRacer[i] && checkinsOfRacer[i] !== i + 1 && test) test = !test;
            }

            if (test && juryData.length <= 2) juryData.push(name);
            return juryData;
        }, []);

        if (result.length === 3) pushResult(result);
    };

    const initSensors = (racerProfile) => {
        for (let i = 0; i < N; i++) {
            if (!racerProfile.checkList.includes(i + 1)) {
                if (i + 1 < N) {
                    allSensors.push(() => startSensor(wait, racerProfile, i + 1, lostingSensors));
                } else {
                    allSensors.push(() => startSensor(wait, racerProfile, i + 1, lostingSensors, existFinish));
                }
                racerProfile.sensorsCount++;
            }
        }
    };
    function lostingSensors(wait, racerProfile, checkpoint) {
        if (checkpoint < N) {
            startSensor(wait, racerProfile, checkpoint, lostingSensors);
        } else {
            startSensor(wait, racerProfile, checkpoint, lostingSensors, existFinish);
        }
    }

    for (const racer of STREET_RACERS) {
        racers[racer] = {};
        racers[racer].name = racer;
        racers[racer].checkList = [];
        racers[racer].sensorsCount = 0;

        initSensors(racers[racer]);
    }
    allSensors.forEach((execSensor) => {
        execSensor();
    });
};
