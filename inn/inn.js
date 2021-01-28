class ArrayStack {
  constructor (len) {
    this.items = []; // 数组
    this.count = 0; // 栈中元素个数
    this.n = len; // 栈的大小
  }
  // 入栈操作
  push(item) {
    // 数组空间不够了， 直接返回false, 入栈失败
    let _self = this;
    if (_self.count == _self.n) return false;
    _self.items[_self.count] = item;
    ++_self.count;
    return true;
  }
  // 出栈操作
  pop() {
    let _self = this;
    if (_self.count == 0) return null;
    let temp = _self.items[_self.count - 1];
    _self.items.pop();
    --_self.count;
    return temp;
  }
}

let stack = new ArrayStack(5);
stack.push(0);
stack.push(4);
stack.push(3);
console.log('---------------入栈后的数据-------------');
console.log(stack);
stack.pop();
stack.pop();
console.log('---------------出栈后的数据-------------');
console.log(stack);