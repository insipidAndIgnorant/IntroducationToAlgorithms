export default class Stack {
    private _stack = [];
    constructor() {
        //
    }

    public stackEmpty = () => {
        return this._stack.length === 0
    }

    public push = (value: any) => {
        this._stack.push(value);
    }

    public pop = () =>  {
        if (this.stackEmpty()) {
            throw new Error('stack underflow')
        }
        this._stack.pop();
    }
}