class Leaf {
  val: number;
  right: Leaf;
  left: Leaf;
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
class AVLTree {
  root: Leaf;
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this._insert(this.root, val);
  }

  _insert(node, val) {
    if (!node) return new Leaf(val);
    if (val < node.val) {
      node.left = this._insert(node.left, val);
    } else {
      node.right = this._insert(node.right, val);
    }

    return node;
  }
}

let avlTree = new AVLTree();
avlTree.insert(1);
avlTree.insert(2);
avlTree.insert(-1);


