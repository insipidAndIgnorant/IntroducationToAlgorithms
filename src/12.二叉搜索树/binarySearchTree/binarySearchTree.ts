import { BinaryTreeNode } from "./binaryTreeNode";

export class BinarySearchTree {
    public root: BinaryTreeNode;

    constructor() {
        this.root = null;
    }

    // 在树中搜索值
    public search = (key: number) => {
        return this.searchTree(this.root, key);
    }

    // 获取树最小值
    public get miniMum() {
        return this.treeMinimum(this.root);
    }

    // 获取树最大值
    public get maxiMum() {
        return this.treeMaximum(this.root);
    }

    // 获取树中某节点后继
    public treeSuccessor = (node: BinaryTreeNode): BinaryTreeNode => {
        if (node.right) {
            return this.treeMinimum(node.right);
        }

        // x == y.right 确保找到的为最低的祖先，且该点左节点为x的祖先  
        // 最低祖先节点就是从根节点遍历到给定节点时的最后一个相同节点，或最近公共父节点
        let minParent = node.parent;
        while (minParent  && node === minParent.right) {
            node = minParent
            minParent = minParent.parent
        }

        return minParent;
    }

    // 获取树某节点前驱
    public treePredecessor = (node: BinaryTreeNode): BinaryTreeNode => {
        if (node.left) {
            return this.treeMaximum(node.left);
        }

        let minParent = node.parent;
        while (minParent && node === minParent.left) {
            node = node.parent;
            minParent = minParent.parent;
        }

        return minParent;
    }

    // 在树中插入值
    public treeInsert = ( val: number) => {
        const newNode = new BinaryTreeNode(val);
        let p = null;
        let curr = this.root;
        while (curr) {
            p = curr;
            if (curr.key < val) {
                curr = curr.right;
            } else {
                curr = curr.right;
            }
        }

        newNode.parent = p;
        if (p === null) {
            this.root = newNode;
        } else if (val < p.key) {
            p.left = newNode;
        } else {
            p.right = newNode;
        }
    }

    // 在树中删除节点
    public treeDelete = (node: BinaryTreeNode) => {
        // 被删除节点只有一个孩子
        if (!node.left) {
            this.treePlant(node, node.right);
        } else if (!node.right) {
            this.treePlant(node, node.left);
        } else {
            // 被删除节点有两个孩子
            const next = this.treeMinimum(node.right); // setp-1 找到node后继

            // 如果后继不是node的孩子， 则替换用后继的右子树替换
            if (next.parent !== node) {
                this.treePlant(next, next.right); // setp-2
            }

            // 用后继替换node, 同时
            this.treePlant(node, next); // setp-3

            // 新节点与node的左子树之间建立关系
            next.left = node.left;
            next.left.parent = next;
        }
    }

    // 以某节点开始寻找最小值
    private treeMinimum = (node: BinaryTreeNode) => {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    // 以某节点开始寻找最大值
    private treeMaximum = (node: BinaryTreeNode) => {
        while (node.right) {
            node = node.right;
        }

        return node;
    }

    // 以某节点开始寻找值
    private searchTree = (node: BinaryTreeNode, key: number) => {
        if (node === null) {
            return undefined;
        }

        if (node.key == key) {
            return node;
        } else if (node.key > key) {
            return this.searchTree(node.left, key);
        } else {
            return this.searchTree(node.right, key);
        }
    }

    // 将target.parent与target断开并与source建立练习
    private treePlant = (target:BinaryTreeNode, source: BinaryTreeNode) => {
        if (target.parent === null) {
            this.root = source
        } else if (target.parent.left === target) {
            target.parent.left = source;
        } else {
            target.parent.right = source;
        }

        source.parent = target.parent;
    }
}