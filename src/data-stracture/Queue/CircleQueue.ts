/**
 * CircleQueue 循环队列
 */

// tslint:disable-next-line:no-any
export class CircleQueueBaseOnArray<T = any> {
  private head: number = 0;
  private tail: number = 0;
  private capacity: number;
  private dataStore: T[];

  private constructor(n: number) {
    this.capacity = n;
    // tslint:disable-next-line
    this.dataStore = new Array(this.capacity);
  }

  public enqueue(item: T): this | 'full' {
    if ((this.tail + 1) % this.capacity === this.head) {
      return 'full';
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
