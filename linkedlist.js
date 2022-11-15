class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(element) {
        let node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    prepend(element) {
        let node = new Node(element);

        if (this.head == null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    size() {
        return this.length;
    }
    head_of_list() {
        if (!this.head) {
            return;
        }
        return this.head;
    }
    tail() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current;
    }
    at(index) {
        let count = 0;
        let current = this.head;
        if (index > this.length) {
            return;
        }
        while(count != index) {
            current = current.next;
            count++;
        }
        return current;
    }
    pop() {
        if (!this.length) {
            return;
        }
        else if (this.length == 1) {
            this.head = null;
            this.length--;
        }
        else {
            // Grab the second to last element in the linked list and set its next pointer to null
            this.at(this.length - 2).next = null;
            this.length--;
        }
    }
    contains(element) {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.data != element) {
            if (current.next == null) {
                return false;
            }
            current = current.next;
        }
        return true;
    }
    find(element) {
        let count = 0;
        let current = this.head;
        if (!this.contains(element)) {
            return null;
        }
        while (current.data != element) {
            current = current.next;
            count++;
        }
        return count;
    }
    toString() {
        let count = 0;
        let string = "";
        while (count < this.length) {
            string += (this.at(count).data + " -> ");
            count++;
        }
        if (count == this.length) {
            string += this.at(count - 1).next;
        }
        return string;
    }
}