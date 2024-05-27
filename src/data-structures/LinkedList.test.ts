import { LinkedListNode, LinkedList, LinkedListNodeType } from './LinkedList';

describe('Tests Linked List', () => {
  it('tests ll node construction', () => {
    const ll = new LinkedListNode(5);
    expect(ll.value).toBe(5);
    expect(ll.next).toBeUndefined();

    const ll2 = new LinkedListNode(10);
    ll.next = ll2;
    expect(ll2.value).toBe(10);
    expect(ll.next).toBeDefined();
    expect(ll.next).toBe(ll2);
  });

  it('tests LL node type', () => {
    const type: LinkedListNodeType = {
      value: 5,
    };
    expect(type.value).toBe(5);
    expect(type.value).toBeDefined();
  });

  it('tests ll construction', () => {
    const ll = new LinkedList<number>();
    ll.append(5);
    ll.append(0);
    ll.append(9);
    expect(ll.getLength()).toBe(3);
    expect(ll.head).toBeDefined();
    expect(ll.head.value).toBe(5);
    expect(ll.head.next.value).toBe(0);
    expect(ll.head.next.next.value).toBe(9);
    expect(ll.head.next.next.next).toBeUndefined();
  });

  it('test construct ll from array, get node at an index, get last node', () => {
    const input = [1, 2, 3, 4, 5, 0];
    const ll: LinkedList<number> = LinkedList.fromArray(input);
    expect(ll.getLength()).toBe(6);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.value).toBe(2);
    expect(ll.head.next.next.value).toBe(3);

    expect(ll.getAt(2).value).toBe(3);
    expect(ll.getAt(3).value).toBe(4);
    expect(ll.getAt(4).value).toBe(5);
    expect(ll.getAt(5).value).toBe(0);
    expect(ll.getAt(100)).toBeUndefined();

    expect(ll.getLastNode().value).toBe(0);
  });
});
