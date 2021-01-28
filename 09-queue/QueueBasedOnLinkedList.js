// 节点对象
class Node {
  constructor (node) {
    this.node = node;
    this.next = null;
  }
}
// 链式队列
class LinkedQueue {
  constructor () {
    let _self = this;
    let head = new Node('head');
    _self.head = head;
    _self.tail = head;
  }
  // 入队
  enqueue (node) {
    let _self = this;
    let newNode = new Node(node);
    _self.tail.next = newNode;
    _self.tail = newNode;
  }
  // 出队
  dequeue () {
    let _self = this;
    if (!_self.head.next) return false;
    let ret = _self.head.next;
    if (_self.head.next.next) {
      _self.head.next = _self.head.next.next;
    }
    return ret;
  }
}

let testLinkedQueue = new LinkedQueue();
testLinkedQueue.enqueue(1);
testLinkedQueue.enqueue(2);
testLinkedQueue.enqueue(3);
testLinkedQueue.enqueue(4);
console.log('-------入列完成--------');
console.log(JSON.stringify(testLinkedQueue));
console.log('-------出列1--------');
testLinkedQueue.dequeue();
console.log(JSON.stringify(testLinkedQueue));
console.log('-------出列2--------');
testLinkedQueue.dequeue();
console.log(JSON.stringify(testLinkedQueue));