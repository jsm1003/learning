/**
 * Stack 栈
 * LIFO last-in-fist-out 后进先出
 */
// tslint:disable-next-line:no-any
export default class Stack<T = any> {
  // tslint:disable-next-line:no-any
  private dataStore: any[] = [];
  private top: number = 0;

  public push(item: T): this {
    this.dataStore[this.top] = item;
    this.top++;

    return this;
  }

  public pop(): this {
    this.top--;

    return this;
  }

  public peek(): T | 'empty' {
    return this.top > 0 ? this.dataStore[this.top - 1] : 'empty';
  }

  public length(): number {
    return this.top;
  }

  public clear(): void {
    this.top = 0;
    this.dataStore = [];
  }
}
