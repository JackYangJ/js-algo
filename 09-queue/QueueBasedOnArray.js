/*
* 顺序队列的实现
*/

class ArrayQueue {
  constructor (n) {
    let _self = this;
    _self.n = n;
    _self.head = 0;
    _self.tail = 0;
    _self.items = new Array(n);
  }
  // 入队
  enqueue (item) {
    let _self = this;
    // if tail == n 表示队列末尾没有空间了
    if (_self.tail == _self.n) {
      // tail == n &&  head == 0 表示整个队列都占满了
      if (_self.head == 0) return false;
      // 数据搬移
      for (let i = _self.head; i < _self.tail; ++i) {
        _self.items[i-_self.head] = _self.items[i];
      }
      // 搬迁完之后重新更新head和tail
      _self.tail -= _self.head;
      _self.head = 0;
    };
    _self.items[_self.tail] = item;
    ++_self.tail;
    return true;
  }
  // 出队
  dequeue () {
    let _self = this;
    // 如果head == tail 表示队列为空
    if (_self.head == _self.tail) return null;
    let ret = _self.items[_self.head];
    _self.items[_self.head] = undefined;
    ++_self.head;
    return ret;
  }
}

let arrayQueue = new ArrayQueue(5);
arrayQueue.enqueue(4);
console.log(arrayQueue);
arrayQueue.enqueue(5);
console.log(arrayQueue);
arrayQueue.enqueue(6);
console.log(arrayQueue);
console.log(arrayQueue.dequeue());
console.log(arrayQueue);
arrayQueue.enqueue(4);
console.log(arrayQueue);
arrayQueue.enqueue(5);
console.log(arrayQueue);
arrayQueue.enqueue(6);
console.log(arrayQueue);


