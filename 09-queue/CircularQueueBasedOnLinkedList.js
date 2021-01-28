/**
 * 循环队列
 * 
*/
class CircularQueue {
  constructor (n) {
    let _self = this;
    _self.n = n;
    _self.items = new Array(n);
    _self.head = 0;
    _self.tail = 0;
  }
  // 入列
  enqueue (item) {
    let _self = this;
    // 队列满了
    if ((_self.tail + 1) % n == head) return false;
    _self.items[_self.tail] = item;
    _self.tail = (_self.tail + 1) % n;
    return true;
  }
  // 出队
  dequeue () {
    let _self = this;
    // 如果head == tail 表示队列为空
    if (_self.head == _self.tail) return null;
    let ret = _self.items[_self.head];
    _self.head = (head + 1) % n;
    return ret;
  }
}