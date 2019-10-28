import Queue from './Queue'

class QStack {
    _enQ;
    _deQ;
    _len = 0;
    constructor(n) {
        this._enQ = new Queue(n);
        this._deQ = new Queue(n);
        this._len = n;
    }

    push(value){
        this._enQ.enQueue(value)
    }

    pop(){
        let result;
        while(this._enQ.size > 1){
            const r = this._enQ.deQueue();
            r && this._deQ.enQueue(r);
        }

        result =  this._enQ.deQueue();
        this._enQ = this._deQ;
        this._deQ = new Queue(this._len);

        return result;
    }
}