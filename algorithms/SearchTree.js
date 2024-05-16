const compare = (a, b) => {
    if (a == b) return 0;
    if (a > b) return 1;
    else return -1;
};

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
