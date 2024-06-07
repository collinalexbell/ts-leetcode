 // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let rv: ListNode | null = null;
    let cur: ListNode | null = null;
    let a = list1;
    let b = list2;
    if(list1 == null && list2 == null) {
        return null
    }
    while(a != null || b != null) {
        let branch;
        if(a == null) {
            branch = b; 
        }
        if(b == null) {
            branch = a;
        }
        if(a != null && b != null) {
            if(a.val < b.val) {
                branch = a;
            } else {
                branch = b;
            }
        }

        if(cur) {
            cur.next = new ListNode(a?.val,a?.next);
            cur = cur.next;
            a = a.next;
        }
        if(!rv) {
            rv =  new ListNode(a?.val,a?.next);
            cur = rv;
            a = a?.next ?? null;
        }
    }
    return rv;
};

export {}