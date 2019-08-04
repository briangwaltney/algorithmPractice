class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return;
          } else {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }

  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
}

let bst = new BST
bst.add(4)
bst.add(6)
bst.add(2)
bst.add(5)
bst.add(50)
console.log(bst.findMin())
console.log(bst.findMax())
//console.log(JSON.stringify(bst, null, 4))