/**
 * Chain of responsibility 职责链模式
 * Whether it's scope chain, the prototype chain, and event bubbling is in the DOM node,
 * 无论是作用域链，原型链，还是 DOM 节点中的事件冒泡
 * we can find the shadow of the Chain of Responsibility pattern
 * 我们都能从中找到职责链模式的影子
 */
// tslint:disable:no-any

export default class Chain {
  private readonly mark: string = 'nextProcess';
  // next node in the chain of responsibility
  private next: Chain;
  // current function in the chain
  private handler: (...rest: any[]) => any;
  public constructor(func: (...rest: any[]) => any) {
    this.handler = func;
  }

  public setNextProcess(chain: Chain): void {
    this.next = chain;
  }

  public processRequest(...rest: any[]): void | string {
    const result: string = this.handler.apply(this, arguments);
    if (result === this.mark) {
      return this.next && this.next.processRequest.apply(this.next, arguments);
    }

    return result;
  }
}
