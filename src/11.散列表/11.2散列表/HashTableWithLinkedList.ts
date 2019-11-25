import { LinkedList } from '../../10.基本数据结构/10.2链表/LinkedList'

class ValuePair {
    key: string;
    value: any
    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return '[' + this.key + ' - ' + this.value + ']';
    };
}


export default class HashTableWithLinkedList {
    table: LinkedList[];
    constructor(){
        this.table = [];
    }

    public loseloseHashCode = (key: string): number => {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    /**
     * @description 添加
     */
    public put = (key: string, value: any) => {
        let position: number = this.loseloseHashCode(key);

        if(this.table[position] === undefined){
            this.table[position] = new LinkedList();
        }

        this.table[position].append( new ValuePair(key,value) );
    }

    /**
     * @description 获取key对应值
     */
    public get = (key: string): any => {

        let position: number = this.loseloseHashCode(key);

        if(this.table[position] !== undefined){
            let current = this.table[position].getHead;

            while(current.next){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }

            // 最后一个节点
            if(current.element.key === key){
                return current.element.value;
            }

            return undefined;
            
        }
    }

    /**
     * @description 移除key
     */
    public remove = (key: string):boolean =>{
        let position = this.loseloseHashCode(key);

        if(this.table[position] !== undefined){
            let current= this.table[position].getHead;

            while(current.next){
                if(current.element.key === key){
                    this.table[position].remove(key);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            // 最后一个节点
            if(current.element.key === key){
                this.table[position].remove(key);
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined;
                }

                return true;
            }

            return false;
            
        }
    }
}