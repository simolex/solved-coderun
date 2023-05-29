const compare = (a, b) => {
    if (a == b) return 0;
    if (a > b) return 1;
    else return -1;
};

class Node {
    constructor(val) {
        this.Value = val;
        this.lchild = null;
        this.rchild = null;
        this.parent = null;
        this.priority = Math.round(Math.random() * 32767);
    }
    _rotateRight() {
        let y = this;
        let x = y.lchild;
        let p = y.parent;

        y.lchild = x.rchild;
        if (y.lchild != null) y.lchild.parent = y;

        if (p.rchild == y) p.rchild = x;
        else p.lchild = x;

        x.parent = p;
        x.rchild = y;
        y.parent = x;
    }
    _rotateLeft() {
        let x = this;
        let y = x.rchild;
        let p = x.parent;

        x.rchild = y.lchild;

        if (x.rchild != null) x.rchild.parent = x;

        if (p.lchild == x) p.lchild = y;
        else p.rchild = y;

        y.parent = p;
        y.lchild = x;
        x.parent = y;
    }
    bubbleUp() {
        let p = this.parent;
        if (this.priority < p.priority) {
            if (p.lchild == this) p._rotateRight();
            else p._rotateLeft();
            this.bubbleUp();
        }
    }
}

class SearchTree {
    constructor(fnCompare) {
        this.Root = new Node(null);
        this.Win = this.Root;
        this.Root.priority = -1;
        this.cmp = fnCompare;
    }
    add(val) {
        let result = 1;
        let p = this.Root;
        let n = this.Root.rchild;

        while (n != null) {
            p = n;
            result = this.cmp(val, p.Value);
            if (result < 0) {
                n = p.lchild;
            } else if (result > 0) {
                n = p.rchild;
            } else {
                return null;
            }
        }

        this.Win = new Node(val);
        this.Win.parent = p;
        if (result < 0) {
            p.lchild = this.Win;
        } else {
            p.rchild = this.Win;
        }
        this.Win.bubbleUp();
        return val;
    }

    find(val, n = this.Root.rchild) {
        let result;

        while (n != null) {
            result = this.cmp(val, n.Value);
            if (result < 0) n = n.lchild;
            else if (result > 0) n = n.rchild;
            else return n;
        }
        return null;
    }
}

module.exports = function (nums, k) {
    tree = new SearchTree();
    nums.forEach((v) => {
        tree.add(v);
    });
};
