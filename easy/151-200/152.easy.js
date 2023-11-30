const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const moveByFront = [(v) => v * 3, (v) => v * 2, (v) => v + 1];
const moveByBack = [(v) => (v % 3 === 0 ? v / 3 : undefined), (v) => (v % 2 === 0 ? v / 2 : undefined), (v) => v - 1];

class Layer {
    constructor(moveBy, value) {
        this.fns = moveBy;
        this.vertex = new Set();
        this.edges = [];
        if (value) {
            this.vertex.add(value);
            this.edges.push([-1, value]);
        }
    }

    nextStepAndFind(prevVertex, crossVertex) {
        for (const currentNode of prevVertex) {
            for (const fn of this.fns) {
                const newNode = fn(currentNode);
                if (newNode) {
                    this.edges.push([currentNode, newNode]);
                    this.vertex.add(newNode);
                    if (crossVertex.has(newNode)) {
                        return newNode;
                    }
                }
            }
        }
        return undefined;
    }
}

rl.on("line", (line) => {
    const n = Number(line);
    let findedNode = false;

    const front = [new Layer(moveByFront, 1)];
    const back = [new Layer(moveByBack, n)];
    if (n > 1) {
        while (!findedNode) {
            const newFront = new Layer(moveByFront);
            findedNode = newFront.nextStepAndFind(front[front.length - 1].vertex, back[back.length - 1].vertex);
            front.push(newFront);
            if (findedNode) break;

            const newBack = new Layer(moveByBack);
            findedNode = newBack.nextStepAndFind(back[back.length - 1].vertex, front[front.length - 1].vertex);
            back.push(newBack);
        }
    } else findedNode = 1;

    result = [];
    let nextNode = findedNode;
    do {
        const currentLayer = front.pop();
        for (const edge of currentLayer.edges) {
            if (edge[1] === nextNode) {
                nextNode = edge[0];
                if (nextNode > 0) result.push(nextNode);
                break;
            }
        }
    } while (nextNode > 0);
    result.reverse().push(findedNode);

    nextNode = findedNode;
    do {
        const currentLayer = back.pop();
        for (const edge of currentLayer.edges) {
            if (edge[1] === nextNode) {
                nextNode = edge[0];
                if (nextNode > 0) result.push(nextNode);
                break;
            }
        }
    } while (nextNode > 0);

    console.log(result.length - 1);
    console.log(result.join(" "));
    rl.close();
});
