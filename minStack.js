/*Add element to the main stack, if the current element being pushed is less than the peek() of min stack, 
then add the push the new min value, or else push the existing min value to the min values stack.
2> when you pop(), pop both from main stack and min stack.
3> when min() is called, return peek() of min stack.
*/

var MinStack = function() {
    this.stack = [];
    this.min = [];
  };
  
  /**
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.stack.push(x);
  
    var min = this.getMin();
    if (min !== undefined) {
      this.min.push(Math.min(x, min));
    } else {
      this.min.push(x);
    }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    if (this.min.length > 0) {
      return this.min[this.min.length - 1];
    }
  };