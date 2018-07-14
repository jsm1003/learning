/**
 * Singleton 单例模式
 */

export default class Modal {
  public title: string;
  public content: string;
  private static instance: Modal;

  private constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  public static create(title: string, content: string): Modal {
    if (!Modal.instance) {
      Modal.instance = new Modal(title, content);
    }

    return Modal.instance;
  }

  public display(): void {
    console.log(`
    |  ${this.title}  |
    ——————————————————
    | ${this.content} |
    `);
  }
}
