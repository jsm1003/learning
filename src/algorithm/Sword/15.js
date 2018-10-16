/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

function ReverseList(pHead) {
  if (pHead === null) {
    return;
  }

  let pPre = null;
  let pNext = null;

  while (pHead) {
    pNext = pHead.next;
    pHead.next = pPre;
    pPre = pHead;
    pHead = pNext;
  }

  return pPre;
}
