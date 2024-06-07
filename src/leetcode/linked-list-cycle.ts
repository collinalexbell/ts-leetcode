 // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function hasCycle(head: ListNode | null): boolean {
    const seen: Set<ListNode> = new Set();
    if (!head) {
        return false;
    } else {
        let next: ListNode | null = head;
        while(next) {
            if(seen.has(next)) {
                return true;
            }
            seen.add(next);
            next = next.next
        }
        return false;
    }
};