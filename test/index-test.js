const assert = require('assert');
const numbers = require('../src/numbers')


/**
 * basic test with mocha
 */
describe("Numbers", function(){
    it('numbers should return a number', function () {
        assert.equal(numbers(),0)
    })
})