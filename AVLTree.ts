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

    this.balance(node);
    return node;
  }

  balance(node: Leaf) {
    if (this.isLeftHeavy(node)) {
      if (this.balanceFactor(node.left) > 0) {
        console.log(`LeftRotation(${node.left.val})`);
      } else {
        console.log(
          `LeftRotaion(${node.left.val}) -> rightRotate(${node.val})`
        );
      }
    }
    if (this.isRightHeavy(node)) {
      if (this.balanceFactor(node.right) > 0) {
        console.log(
          `rightRotate(${node.right.val}) -> leftRotate(${node.val})`
        );
      } else {
        console.log(`leftRotate(${node.right.val})`);
      }
    }
  }
  _leftRotate(root) {
    let newRoot = root.right;
    root.right = newRoot.left;
    newRoot.left = root;

    // reset the hight
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  _rotateRight(root) {
    let newRoot = root.left;
    root.left = newRoot.right;
    newRoot.right = root;
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  setHeight(node) {
    node.height = Math.max(this.height(node.right), this.height(node.left)) + 1;
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
avlTree.insert(10);
avlTree.insert(30);
avlTree.insert(20);

console.log(avlTree);
