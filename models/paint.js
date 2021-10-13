const Paint = function(litres, empty){
    this.litres = litres;
    this.empty = empty;
};

Paint.prototype.emptyPaintCan = function(){
    let result;
    if (this.empty === true){
        result = 'Paint can is empty';
    } else {
        result = 'Still paint left in the can!';
    }
    return result;
};


