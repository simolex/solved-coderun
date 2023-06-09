const waitPause = (ms) => new Promise((r) => setTimeout(r, ms));

const startSensor = (name, checkpoint, vizitedCheckpoints) => {
    const waitCheckpoint = (status) => {
        if (status && status === "connection lost") {
            waitPause(0).then(startSensor.bind(this, checkpoint));
            return;
        }
        if (checkpoint === countCheckpoints && active) {
            resolve(name); //callbackFinish(name);
        }
        vizitedCheckpoints.push(checkpoint);
    };

    waitFn(name, checkpoint, waitCheckpoint);
};

const Racer = function (name, waitFn, countCheckpoints) {
    return new Promise((resolve, reject) => {
        let active = true;
        const vizitedCheckpoints = [];
        const existCheckpoints = [];

        // if (vizitedCheckpoints[i] !== undefined) {
        //     if (checkpointNumber !== vizitedCheckpoints[i]) {
        //         reject(false);
        //     }
        // } else {
        //     startSensor(checkpointNumber);
        // }

        for (let i = 1; i <= countCheckpoints; i++) {
            existCheckpoints.push(i);
            startSensor(i);
        }

        // existCheckpoints.forEach((checkpointNumber, i) => );
    });
};

module.exports = function winners(wait, pushResult, STREET_RACERS, N) {
    const r = STREET_RACERS;
    const racers = r.reduce((list, racer) => {
        list.push(Racer(racer, wait, N));
        return list;
    }, []);

    const res = await Promise.allSettled(racers);
    const result = res.reduce((list, r) => {
        if (r.status === "fulfilled" && list.length <= 2) list.push(r.value);
        return list;
    }, []);
    console.log(result);
    //console.log(result);
    return result;
};
