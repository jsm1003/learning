function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // 快指针每次前进两步
    let next = slow.next;
    // 记录慢指针下一个位置
    slow.next = prev;
    // 慢指针每次前进一步，同时反转链表
    prev = slow;
    slow = next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  while (slow !== null) {
    if (slow.val !== prev.val) {
      return false;
    }

    slow = slow.next;
    prev = prev.next;
  }

  return true;
}
