export class BSTreeNode<T> {
  public value: T;
  public left?: BSTreeNode<T>;
  public right?: BSTreeNode<T>;

  constructor(value: T, left?: BSTreeNode<T>, right?: BSTreeNode<T>) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  public hasNoChild(): boolean {
    return !this.left && !this.right;
  }

  public getAllChildren(): Array<BSTreeNode<T>> {
    const children = [];
    this.left ? children.push(this.left) : null;
    this.right ? children.push(this.right) : null;
    return children;
  }
}

export class BSTree<T> {
  public root?: BSTreeNode<T>;

  constructor(root?: BSTreeNode<T>) {
    this.root = root;
  }

  public insert(value: T, root?: BSTreeNode<T>): void {
    if (!this.root) {
      const node = new BSTreeNode(value);
      this.root = node;
      return;
    }

    const currentNode = root ?? this.root;
    if (value < currentNode.value && !currentNode.left) {
      currentNode.left = new BSTreeNode(value);
      return;
    } else if (value >= currentNode.value && !currentNode.right) {
      currentNode.right = new BSTreeNode(value);
      return;
    } else if (value < currentNode.value && currentNode.left) {
      this.insert(value, currentNode.left);
    } else {
      this.insert(value, currentNode.right);
    }
  }

  public getDepth(): number {
    if (!this.root) {
      return 0;
    }

    const stack = [this.root];
    const visitedAllChildren = [];
    let maxDepth = 0;

    while (stack.length) {
      const currentNode = stack.at(stack.length - 1);

      if (currentNode.hasNoChild()) {
        maxDepth = Math.max(maxDepth, stack.length);
        visitedAllChildren.push(stack.pop());
        continue;
      }

      if (currentNode.left && !visitedAllChildren.includes(currentNode.left)) {
        stack.push(currentNode.left);
        continue;
      }
      if (
        currentNode.right &&
        !visitedAllChildren.includes(currentNode.right)
      ) {
        stack.push(currentNode.right);
        continue;
      }
      visitedAllChildren.push(stack.pop());
    }

    return maxDepth;
  }
}
