const Room = function(area, painted){
    this.area = area;
    this.painted = painted;

};

Room.prototype.readyToPaint = function(){
    let result;
    if (this.painted === true){
        result = 'Already painted';
    } else {
        result = 'Ready to paint!';
    }
    return result;
    // console.log(`Hi, my name is ${this.name}`);
};

// Person.prototype.feedPet = function(food){
//     console.log(`${this.name} fed ${this.pet.name}`)
//     this.pet.eat(food)
// };

module.exports = Room;