const assert = require('assert');
// const Room = require('../..room');
// const Painter = require('../..painter');
const Painter = require('../decorator.js');

describe('Painter', function(){

    let painter;
    beforeEach(function(){
        painter = new Painter();
    });

    it('should start with an empty paint stock', function(){
        const actual = painter.paintStock;
        assert.deepStrictEqual(actual, []);
    });
});