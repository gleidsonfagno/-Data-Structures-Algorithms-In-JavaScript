class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode =  new Node(value)

        this.head = newNode
        this.tail = this.head
        this.lenght = 1
    }

    // Doubly Linked List Push Method
    push (value) {
        const newNode = new Node(value)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.lenght++
        return this
    }

    // Doubly Linked List Pop Method
    pop() {
        if (!this.lenght === 0) {
            return undefined
        }

        let temp =  this.tail
        if (temp === 1) {
            this.head = null
            this.tail = null
        }

        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        this.lenght--
        return temp
    }

    // Doubly Linked List Unshift Method
    unshift(value) {
        const newNode = new Node(value)

        if (this.lenght === 0) {
            this.head = newNode
            this.tail = newNode
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.lenght++
        return this
    }

    // Doubly Linked List Shift Method
    shift() {
        if(this.lenght === 0) {
            return undefined
        }

        let temp = this.head

        if(this.lenght === 1) {
            this.head = null
            this.tail = null
        }

        this.head = this.head.next
        this.head.prev = null
        temp.next = null
        this.lenght--
        return temp
    }
    
    // Reverse Linked List 
    reverse() {
        let temp = this.head // gurada o head em uma variavel temporaria
        this.head = this.tail // apontamos o head para tail
        this.tail = temp // apontamos a tail para o head que esta guardado na variavel temp

        let next = temp
        let prev  = null

        for (let i = 0; i < this.lenght; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
    }
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.unshift(4)
console.log(myDoublyLinkedList)
myDoublyLinkedList.shift()
console.log(myDoublyLinkedList.pop())


myDoublyLinkedList.reverse()
console.log(myDoublyLinkedList)