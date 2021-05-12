class linkedList {
    constructor() {
        this.tail = null
        this.head = null
        this.curr = null
    }
    static id = 0
    add(data) {
        const node = {
            value: data,
            next: null,
            prev: null,
            id: linkedList.id,
        }
        linkedList.id++
        if (this.tail === null) {
            this.tail = this.head = node
        } else {
            node.prev = this.head
            this.head.next = node
            this.head = node
        }
    }
    delete(id) {
        this.curr = this.tail

        while (this.curr !== null) {
            if (id === this.curr.id) {
                if (this.tail === this.curr && this.head === this.curr) {
                    this.curr.value = null
                    this.head = this.tail = null
                } else if (this.curr.prev === null) {
                    this.curr.value = null
                    this.tail = this.curr.next
                    this.curr.next.prev = null
                } else if (this.curr.next === null) {
                    this.curr.value = null
                    this.head = this.curr.prev
                    this.curr.prev.next = null
                } else {
                    this.curr.value = null
                    this.curr.prev.next = this.curr.next
                    this.curr.next.prev = this.curr.prev
                }
                break
            }

            this.curr = this.curr.next
        }
    }
    for() {
        let arr = []
        this.curr = this.tail
        while (this.curr !== null) {
            arr.push([this.curr.id, this.curr.value])
            this.curr = this.curr.next
        }
        return arr
    }
}

export { linkedList }
