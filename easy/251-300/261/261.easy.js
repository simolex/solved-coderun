document.querySelector("button").addEventListener("click", function () {
    var context = new AudioContext();

    // start - body resolve
    const lines = document.querySelectorAll(".game .target .line");
    const keys = document.querySelectorAll(".game .keys .key");

    const notes = [
        ["C1"],
        ["C1-sharp", "D1-flat"],
        ["D1"],
        ["D1-sharp", "E1-flat"],
        ["E1"],
        ["F1"],
        ["F1-sharp", "G1-flat"],
        ["G1"],
        ["G1-sharp", "A1-flat"],
        ["A1"],
        ["A1-sharp", "H1-flat"],
        ["H1"],
        ["C2"],
        ["C2-sharp", "D2-flat"],
        ["D2"],
        ["D2-sharp", "E2-flat"],
        ["E2"],
        ["F2"],
        ["F2-sharp", "G2-flat"],
        ["G2"],
        ["G2-sharp", "A2-flat"],
        ["A2"],
        ["A2-sharp", "H2-flat"],
        ["H2"],
    ];

    const mapNote = [...keys].reduce((map, keyNote, index) => {
        notes[index].forEach((k) => {
            const current = keyNote;
            map[k] = current;
        });
        return map;
    }, {});
    let tik = 0;
    lines.forEach((line) => {
        const symbols = line.querySelectorAll(".symbol");
        symbols.forEach((symbol) => {
            const idKey = [...symbol.classList.values()].filter((c) => c !== "symbol").join("-");
            if (idKey === "separator") {
                setTimeout(() => {
                    console.log("separator");
                }, 300 * tik);
            } else {
                setTimeout(
                    (id) => {
                        mapNote[id].click();
                    },
                    300 * tik,
                    idKey
                );
            }
            tik++;
        });
    });
    // end
});
