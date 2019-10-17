export default class Deque {
    private len = 0;
    private _deque = [];
    constructor(n: number) {
        this.len = n;
    }

    public unshift = (value: any) => {
        if (this._deque.length === this.len) {
            throw new Error('deque overflow');
        }
        this._deque.unshift(value);
    }

    public push = (value: any) => {
        if (this._deque.length === this.len) {
            throw new Error('deque overflow');
        }
        this._deque.push(value);
    }

    public dequeEmpty = () => {
        return this._deque.length === 0;
    }

    public shift = () => {
        if (this.dequeEmpty()) {
            throw new Error('deque underflow');
        }
        this._deque.shift();
    }

    public pop = () => {
        if (this.dequeEmpty()) {
            throw new Error('deque underflow');
        }
        this._deque.pop();
    }
}