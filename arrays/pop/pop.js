if (!Array.prototype.dsPop) {
    Array.prototype.dsPop = function () {
        if (this.length === 0) {
            return undefined
        }

        const removedItem = this[this.length - 1];

        this.length = this.length - 1

        return removedItem;
    }
}

let meuArray = [1, 2, 3, 4, 5];
console.log(meuArray.dsPop()); 

