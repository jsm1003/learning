/**
 * Queue 队列
 * FIFO fist-in-fist-out 先进先出
 */
import LinkedList, { Node } from '../LinkedList/LinkedList';

// tslint:disable-next-line:no-any
export default class QueueBaseOnArray<T = any> {
  private head: number = 0;
  private tail: number = 0;
  private capacity: number;

  private dataStore: T[];
  private constructor(n: number) {
    this.capacity = n;
    // tslint:disable-next-line
    this.dataStore = new Array(n);
  }
  public enqueue(item: T): this | 'full' {
    if (this.tail === this.capacity) {
      if (this.head === 0) {
        return 'full';
      }

      for (let i: number = this.head; i < this.tail; i++) {
        this.dataStore[i - this.head] = this.dataStore[i];
      }

      this.tail -= this.head;
      this.head = 0;
    }

    this.dataStore[this.tail] = item;
    this.tail++;

    return this;
  }

  public dequeue(): T | 'empty' {
    if (this.head === this.tail) {
      return 'empty';
    }
    const ret: T = this.dataStore[this.head];
    this.head++;

    return ret;
  }
}

// tslint:disable-next-line:no-any
export class QueueBaseOnLinkedList<T = any> {
  private head: Node;
  private tail: Node;

  public enqueue(item: T): this {
    if (this.head === null) {
      this.head = new Node(item);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    }

    return this;
  }

  public dequenue(): T | 'empty' {
    if (!this.head) {
      return 'empty';
    }

    const ret: T = this.head.element;
    this.head = this.head.next;

    return ret;
  }
}
