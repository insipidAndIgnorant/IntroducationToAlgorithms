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

export default class HashTableWithLinedList {
    table: any[];

    constructor() {
        this.table = [];
    }
    
    /**
     * @description 获取散列值
     */
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
    public put = (key: string, value: any): void => {
        let position = this.loseloseHashCode(key);

        if (this.table[position] === undefined) {
            this.table[position] = new ValuePair(key, value);
        } else {
            let index = position + 1;
            while (this.table[index] !== undefined) {
                index += 1;
            }

            this.table[position] = new ValuePair(key, value);
        }
    }

    /**
     * @description 获取key对应值
     */
    public get = (key: string): any => {

        let position = this.loseloseHashCode(key);

        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                return this.table[position].value;
            } else {
                let index = position + 1;
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index += 1;
                }

                if (this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
    }

    /**
     * @description 移除key
     */
    public remove = (key: string): boolean=> {
        let position = this.loseloseHashCode(key);

        if (this.table[position] !== undefined) {
            if (this.table[position].key === key) {
                this.table[position] === undefined;
                return true;
            } else {
                let index = position + 1;
                while (this.table[index] === undefined || this.table[index].key !== key) {
                    index += 1;
                }

                if (this.table[index].key === key) {
                    this.table[index] === undefined;
                    return true;
                }
            }
        }

        return false;
    }
}