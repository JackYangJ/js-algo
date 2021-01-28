class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = new Node('head');
  }
  // 头部插入节点
  appendInStart(node) {
    let newNode = new Node(node);
    let headNode = this.head;
    if (headNode.next) { // 链表不为空处理
      newNode.next = headNode.next;
      headNode.next = newNode;
    } else { // 链表为空
      headNode.next = newNode;
    }
  }
  // 尾部插入节点
  appendInEnd(node) {
    let newNode = new Node(node);
    let headNode = this.head;
    let currentNode;
    if (headNode.next) { // 链表不为空处理
      currentNode = headNode.next;
      while (currentNode.next !== null) { // 遍历直到获取到最后的链表节点
        currentNode = currentNode.next;
      }
      // 链表最后一个节点指向新插入的节点
      currentNode.next = newNode;
    } else { // 链表为空直接调用头部插入节点的功能
      this.appendInStart(node);
    }
  }
  // 其他地方插入节点，输入index
  appendInMiddle(index, node) {
    let newNode = new Node(node);
    let tempNode = this.findIndex(index);
    if (tempNode) {
      newNode.next = tempNode.next;
      tempNode.next = newNode;
    }
    return;
  }
  // 按照当前索引值查询
  findIndex(index) {
    let currentIndex = 0;
    let headNode = this.head;
    let currentNode = headNode.next;
    if (index < 0) return;
    while (currentIndex !== index) {
      if (currentNode.next) { // 非最后节点
        currentNode = currentNode.next;
        currentIndex++;
      } else { // 遍历到最后节点
        if (currentIndex < index) { // 该索引不存在链表中
          return;
        }
      }
    }
    return currentNode;
  }
  // 按照值查找
  findValue(value) {
    let headNode = this.head;
    let currentNode = headNode.next;
    while (currentNode.node !== value) {
      if (currentNode.next) { // 非最后节点
        currentNode = currentNode.next;
      } else { // 遍历到最后节点
        return;// 该值不存在链表中
      }
    }
    return currentNode;
  }
  // 删除头部节点
  deleteInStart() {
    let headNode = this.head;
    if (headNode.next) {
      headNode.next = headNode.next.next;
    }
  }
  // 删除尾部节点
  deleteInEnd() {
    let headNode = this.head;
    let currentNode = headNode.next;
    let beforeNode = headNode;
    if (headNode.next) {
      while (currentNode.next != null) {
        beforeNode = currentNode;
        currentNode = currentNode.next;
      }
      beforeNode.next = null;
    }
  }
  // 删除中间节点
  deleteInMiddle(index) {
    let beforeNode = this.findIndex(index - 1);
    let afterNode = this.findIndex(index + 1);
    beforeNode.next = afterNode;
  }
  getLength() {
    let headNode = this.head;
    let len = 0;
    let currentNode = headNode.next;
    while (headNode.next) {
      currentNode = currentNode.next;
      len++;
    }
    return len;
  }
}
let singlelinkedlist = new SingleLinkedList();
console.log(JSON.stringify(singlelinkedlist));
singlelinkedlist.appendInStart(new Node('newNode1'));
console.log(JSON.stringify(singlelinkedlist));
singlelinkedlist.appendInEnd(new Node('newNode2'));
console.log(JSON.stringify(singlelinkedlist));
