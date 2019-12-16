export class BinaryTreeNode {
    public left: BinaryTreeNode;
    public right: BinaryTreeNode;
    public parent: BinaryTreeNode;
    public key: number;

    constructor(val: number) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.key = val;
    }

    public get leftHeight(): number {
        if (!this.left) {
            return 0;
        }

        return this.left.leftHeight
    }

    public get rightHeight(): number {
        if (!this.right) {
            return 0;
        }

        return this.right.rightHeight
    }

    public get height(): number {
        return Math.max(this.leftHeight, this.rightHeight);
    }

    public get balanceElement(): number {
        return this.leftHeight - this.rightHeight;
    }

    public get uncle(): BinaryTreeNode {
        if (!this.parent || !this.parent.parent) {
            return undefined;
        }

        if (this.parent.parent.left === this.parent) {
            return this.parent.parent.right;
        }

        return this.parent.parent.left;
    }

    public get hasChilds(): boolean {
        return !!this.left || !!this.right;
    }
    
    public set setKey(val: number) {
        this.key = val;
    }

    public set setLeft(left: BinaryTreeNode) {
        this.left.parent = null;
        this.left = left;
        this.left.parent = this;
    }

    public set setRight(right: BinaryTreeNode) {
        this.right.parent = null;
        this.right = right;
        this.right.parent = this;
    }

    public removeChild = (removeElement: BinaryTreeNode) => {
        if (this.left && this.left === removeElement) {
            this.left.parent = null;
            this.left = null;
        } else if (this.right && this.right === removeElement) {
            this.right.parent = null;
            this.right = null;
        }
    }
}