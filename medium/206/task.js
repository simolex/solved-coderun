const express = require("express");

const { BEEP_CODES } = require("@yandex-blitz/phone");

const createApp = ({ phone }) => {
    const app = express();

    // звонит по номеру записанному в "быстром наборе" под цифрой digit
    app.get("/speeddial/:digit", async (req, res) => {
        phone
            .getData()
            .then((value) => {
                const speeddialDict = JSON.parse(value);

                phone
                    .connect()
                    .then(() => {
                        if (speeddialDict[req.params.digit]) {
                            phone.dial(speeddialDict[req.params.digit]);
                        } else {
                            phone.beep(BEEP_CODES.ERROR);
                        }
                        res.sendStatus(200);
                    })
                    .catch(() => {
                        phone.beep(BEEP_CODES.FATAL);
                        res.sendStatus(500);
                    });
            })
            .catch(() => {
                phone.beep(BEEP_CODES.ERROR);
                res.sendStatus(500);
            });
    });

    // записывает в "быстрый набор" под цифру digit номер phonenumber
    app.post("/speeddial/:digit/:phonenumber", (req, res) => {
        phone
            .getData()
            .then((value) => {
                const speeddialDict = JSON.parse(value);
                speeddialDict[req.params.digit] = Number(req.params.phonenumber);

                phone
                    .setData(JSON.stringify(speeddialDict))
                    .then(() => {
                        phone.beep(BEEP_CODES.SUCCESS);
                        res.sendStatus(200);
                    })
                    .catch(() => {
                        phone.beep(BEEP_CODES.ERROR);
                        res.sendStatus(500);
                    });
            })
            .catch(() => {
                phone.beep(BEEP_CODES.ERROR);

                res.sendStatus(500);
            });
    });

    return app;
};

exports.createApp = createApp;
