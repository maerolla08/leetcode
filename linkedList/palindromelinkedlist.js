/*
list: A -> B -> C -> null/end
Step 1. Both pointers at A
Step 2. Slower pointer moves to B, build previous link (i.e. B.prev = A). Faster pointer moves to B then to C
Step 3. Faster pointer is at then end (C.next == null).
Step 4. Center pointer is at B (i.e. where slow pointer is). NOTE: where center is depends on the parity of the number of nodes
Step 5. Move slower pointer forward and center pointer backend, check the equality of the value. If value is not the same, not a palindrome.
Step 6. Slow pointer successfully reaches the end => is a palindrome.


*/
class LinkedListNode {
    constructor(char, next) {
      this.value = char;
      this.next = next;
    }
  }
  class LinkedList {
    constructor(chars) {
      const len = chars.length;
      let currentNode = null;
      for (let i = len - 1; i >= 0; i--) {
        let node = new LinkedListNode(chars[i], currentNode);
        currentNode = node;
      }
      this.head = currentNode;
    }
    isPalindrome() {
      let center, slow, quick;
      center = slow = quick = this.head;
      if (slow.next == null) {
        return true;
      }
      while(quick.next != null) {
        slow = slow.next;
        slow.prev = center;
        center = slow
        quick = quick.next
        if (quick.next == null) {
          // even number
          center = slow.prev;
        } else {
          quick = quick.next;
        }
      }
      do {
        if(slow.value !== center.value) {
          return false;
        }
        slow = slow.next;
        center = center.prev;
      } while(slow != null) 
      return true;
    }
  }
  console.log(new LinkedList(['a']).isPalindrome()); // true
  console.log(new LinkedList(['a', 'b']).isPalindrome()); // false
  console.log(new LinkedList(['a', 'b', 'a']).isPalindrome()); // true
  console.log(new LinkedList(['a', 'b', 'c', 'b', 'a']).isPalindrome()); // true
  console.log(new LinkedList(['a', 'b', 'c', 'd', 'a']).isPalindrome()); // false
  console.log(new LinkedList(['a','b','c', 'c', 'b', 'a']).isPalindrome()); // true