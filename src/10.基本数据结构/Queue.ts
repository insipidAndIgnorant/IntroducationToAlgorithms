export default class Queue {
    private _queue = [];
    private _len = 0;
    constructor(n: number) {
        this._len = n;
    }

    public queueEmpty = () => {
        return this._queue.length === 0
    }

    public enQueue = (value: any) => {
        if (this._queue.length === this._len) {
            throw new Error('queue overflow')
        }
        this._queue.push(value);
    }

    public deQueue = () =>  {
        if (this.queueEmpty()) {
            throw new Error('queue underflow')
        }
        this._queue.shift();
    }

    get size () {
        return this._len
    }
}

export class LoopQueue {
    private _queue = [];
    private head = 0;
    private tail = 0;

    constructor(n: number) {
        this._queue.length = n;
        this._queue.fill(undefined)
    }

    public queueEmpty = () => {
        return this.head === this.tail
    }

    public enQueue = (value: any) => {
        if (this.head === this.tail+1) {
            throw new Error('queue overflow');
        }
        this._queue[this.tail] = value;
        this.tail++;
    }

    public deQueue = () =>  {
        if (this.queueEmpty()) {
            throw new Error('queue underflow');
        }

        const head = this._queue[this.head];
        if (this.head == this._queue.length - 1) {
            this.head = 0;
        } else {
            this.head++;
        }

        return head;
    }
}