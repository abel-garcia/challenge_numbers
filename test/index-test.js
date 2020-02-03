const assert = require('assert');
const repeat = require('../src/numbers')


/**
 * basic test with mocha
 */
describe("Numbers", function(){
    it('numbers should return a null', function () {
        assert.equal(repeat(),null)
    })
})