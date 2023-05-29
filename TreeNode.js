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
