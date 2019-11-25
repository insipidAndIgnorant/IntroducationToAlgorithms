export class Node {
    element: any;
    next: Node | null;
    prev: Node | null;

    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList {
    length: number;
    head: Node | null;
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append = (element: any) => {
        let node: Node = new Node(element), current: Node;
        if ( this.head === null) {
            this.head = node;
        }
        else {
            current =  this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    };

    insert = (position: number, element: any): boolean => {
        if (position >= 0 && position <=  this.length) {
            let node: Node = new Node(element), current: Node =  this.head, previous: Node, index: number = 0;
            if (position === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        else {
            return false;
        }
    };

    removeAt = (position: number): any => {
        if (position > -1 && position <  this.length) {
            let current: Node =  this.head, previous: Node, index: number = 0;
            if (position === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        else {
            return null;
        }
    };

    remove = (element: any): any => {
        let index:number = this.indexOf(element);
        return this.removeAt(index);
    };

    indexOf = (element): number => {
        let current: Node =  this.head, index: number = -1;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    isEmpty = (): boolean => {
        return  this.length === 0;
    };

    get size() {
        return  this.length;
    };

    get getHead () {
        return  this.head;
    };

    toString = (): string => {
        let current =  this.head, string = '';
        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };
}
