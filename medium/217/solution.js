const { getHashByData, fetchData } = require("./utils");

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const testHash = (dataResp) =>
    new Promise((res, rej) => {
        getHashByData(dataResp.data, (hash) => {
            if (hash === dataResp.hashSum) {
                res(dataResp);
            }
            rej(hash);
        });
    });

const retryFetch = (url, retries1) =>
    new Promise((resolve, reject) => {
        const retries = retries1;
        return fetchData(url)
            .then((resp) =>
                testHash(resp)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((reasonHash) => {
                        if (retries > 0) {
                            return wait(0)
                                .then(retryFetch.bind(null, url, retries - 1))
                                .then(resolve)
                                .catch(reject);
                        }
                        return reject(reasonHash);
                    })
            )
            .then((data) => data)
            .catch((reason) => {
                if (retries > 0) {
                    return wait(0)
                        .then(retryFetch.bind(null, url, retries - 1))
                        .then(resolve)
                        .catch(reject);
                }
                return reject(reason);
            });
    });

module.exports = async function (urls, retryCount) {
    const urlPromise = urls.map((url) => retryFetch(url, retryCount));
    const responses = await Promise.allSettled(urlPromise);
    return responses.reduce((result, response) => {
        if (response && response.status === "fulfilled") result.push(response.value.data);
        return result;
    }, []);
};
