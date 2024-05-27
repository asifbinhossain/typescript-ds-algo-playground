import { BSTree, BSTreeNode } from './BinarySearchTree';

describe('test Binary Search Tree Data Structure', () => {
  it('tests bstree node construction', () => {
    const node = new BSTreeNode<number>(5);
    expect(node.value).toBe(5);
    expect(node.left).toBeUndefined();
    expect(node.right).toBeUndefined();
  });

  it('tests bstree construction', () => {
    const list = [0, -1, 8, -5, 5, 6, -5, -99, -5];
    const bstree = new BSTree<number>();
    list.forEach((num) => bstree.insert(num));
    expect(bstree.root.value).toBe(0);
    expect(bstree.getDepth()).toBe(5);
  });
});
