/**
 * Single Linked List
 */
// tslint:disable:no-any
export class Node {
  public element: any;
  // tslint:disable-next-line:no-null-keyword
  public next: any = null;

  public constructor(element: any) {
    this.element = element;
  }
}

export default class LinkedList {
  public head: Node;

  public constructor() {
    this.head = new Node('head');
  }

  public find(element: any): Node {
    let currentNode: Node = this.head;
    while (currentNode.element !== element) {
      if (currentNode.next === null) {
        throw new Error(`Can not find element: ${element}`);
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public findPrev(element: any): Node {
    let currentNode: Node = this.head;
    while (currentNode.next.element !== element && currentNode.next !== null) {
      if (currentNode.next === null) {
        throw new Error(`Can not find element: ${element}`);
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public insert(newElement: any, item: any): void {
    const newNode: Node = new Node(newElement);
    const currentNode: Node = this.find(item);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  public display(): void {
    let currentNode: Node = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  public remove(item: any): void {
    const targetNode: Node = this.findPrev(item);
    if (targetNode.next !== null) {
      targetNode.next = targetNode.next.next;
    }
  }
}
