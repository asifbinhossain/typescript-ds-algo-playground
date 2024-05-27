export class LinkedListNode<T> {
  public value: T;
  public next?: LinkedListNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  public head?: LinkedListNode<T>;
  private length: number = 0;

  constructor(head?: LinkedListNode<T>) {
    this.head = head;
    if (head) this.length++;
  }

  /**
   * fromArray
   */
  public static fromArray(list: Array<any>): LinkedList<any> {
    const ll = new LinkedList();
    list.forEach((item) => {
      ll.append(item);
    });
    return ll;
  }

  /**
   * append
   */
  public append(item: T): LinkedList<T> {
    const newNode = new LinkedListNode(item);
    if (this.head) {
      let iter = this.head;
      while (iter.next) {
        iter = iter.next;
      }
      iter.next = newNode;
    } else {
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * getLength
   */
  public getLength(): number {
    return this.length;
  }

  /**
   * getAt - Get node at an idx
   */
  public getAt(idx: number): LinkedListNode<T> | undefined {
    if (idx > this.length - 1) {
      return undefined;
    }
    if (!this.head) {
      return undefined;
    }
    let position = 0;
    let iter = this.head;

    while (iter.next && position != idx) {
      iter = iter.next;
      position++;
    }
    return iter;
  }

  /**
   * getLastNode
   */
  public getLastNode(): LinkedListNode<T> | undefined {
    if (!this.head) {
      return undefined;
    }
    let iter = this.head;
    while (iter.next) {
      iter = iter.next;
    }
    return iter;
  }
}

export type LinkedListNodeType = {
  value: number;
  next?: LinkedListNodeType;
};
