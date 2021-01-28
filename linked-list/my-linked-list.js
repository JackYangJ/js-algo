/**
 * 1）单链表的插入，查询，遍历操作
*/
class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head');
  }
  // 根据value查找节点
  findByValue (item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode == null ? -1 : currentNode;
  }
  // 根据index查找节点 从0开始
  findByIndex (index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    console.log(currentNode);
    return currentNode == null ? -1 :  currentNode;
  }
  // 查找前一个
  findPrev (item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode == null ? -1 : currentNode;
  }
  // 向链表末尾追加节点
  append (item) {
    let currentNode = this.head;
    let newNode = new Node(item);
    while(currentNode !== null && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  // 指定元素向后插入
  insert (item, element) {
    let newNode = new Node(item);
    let getElement = this.findByValue(element);
    if (getElement == -1) {
      console.log('没有找到对应的值插入');
      return;
    }
    newNode.next = getElement.next;
    getElement.next = newNode;
  }
  // 删除
  remove (item) {
    let currentNode = this.findPrev(item);
    currentNode.next = currentNode.next.next;
  }
  // 遍历显示所有节点
  display () {
    let currentNode = this.head.next; // 忽略头部指针的值
    while(currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

// Test
const LList = new LinkedList();
LList.append('chen');
LList.append('curry');
LList.append('sang');
LList.append('zhao');
console.log('--------------insert them--------------');
LList.insert('qian', 'chen'); // 首元素后插入
LList.insert('zhou', 'zhao'); // 尾元素后插入
LList.display();
console.log('--------------remove them--------------');
LList.remove('curry');
LList.display();
console.log('--------------find by them--------------');
LList.findByValue('chen');
console.log('--------------find by index--------------');
LList.findByIndex(2);
console.log('--------------与头结点同值元素测试--------------');
LList.insert('head', 'sang');
LList.display();
LList.findPrev('head');
LList.remove('head');
LList.display();