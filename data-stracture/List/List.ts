/**
 * List
 */
// tslint:disable:no-any
class List<T> {
  private listSize: number = 0;
  private dataStore: T[] = [];
  public position: number = 0;

  get length(): number {
    return this.listSize;
  }

  get toString(): T[] {
    return this.dataStore;
  }

  public append(element: any): void {
    this.dataStore[this.listSize++] = element;
  }

  public find(element: any): number {
    for (let i: number = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }

    return -1;
  }

  public remove(element: any): boolean {
    const foundAt: number = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;

      return true;
    }

    return false;
  }

  public insert(element: any, after: any): boolean {
    const insertPosition: number = this.find(after);
    if (insertPosition > -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      this.listSize++;

      return true;
    }

    return false;
  }

  public clear(): void {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.position = 0;
  }

  public front(): void {
    this.position = 0;
  }

  public end(): void {
    this.position = this.listSize - 1;
  }

  public prev(): void {
    if (this.position > 0) {
      this.position--;
    } else {
      console.log('already head');
    }
  }
}
