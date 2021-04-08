class Leaf {
  val: number;
  right: Leaf;
  left: Leaf;
  height: number;
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.height = 0;
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
    // calc the height max(left ,right) + 1
    node.height = Math.max(this.height(node.right), this.height(node.left)) + 1;

    const balanceFactor = this.balanceFactor(node);
    if (this.isLeftHeavy(node)) {
      console.log('Left Heavy');
    }
    if (this.isRightHeavy(node)) {
      console.log('Right heavy');
    }
    return node;
  }

  isLeftHeavy(node: Leaf) {
    return this.balanceFactor(node) > 1;
  }
  isRightHeavy(node: Leaf) {
    return this.balanceFactor(node) < -1;
  }
  balanceFactor(node: Leaf) {
    return node === null ? 0 : this.height(node.left) - this.height(node.right);
  }

  height(node) {
    return node === null ? -1 : node.height;
  }
}

let avlTree = new AVLTree();
avlTree.insert(30);
avlTree.insert(20);
avlTree.insert(1);

console.log(avlTree);
