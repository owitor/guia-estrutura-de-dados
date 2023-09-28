Array.prototype.dsPop = function () {
    if (this.length === 0) {
        return undefined;
    }

    let removeItem = this[this.length - 1];
    
    this.length = this.length - 1

    return removeItem;
}

let meuArray = [1, 2, 3, 4, 5];
console.log(meuArray.dsPop()); 

