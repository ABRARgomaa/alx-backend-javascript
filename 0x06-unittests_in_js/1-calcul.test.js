var calculateNumber = require("./1-calcul")
const assert = require('assert');

describe("calculateNumber", function() {
    it("should return 6 when adding 1.4 and 4.5", function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it("should return -4 when substracting 1.4 and 4.5", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it("should return 0.2 when dividing 1.4 and 4.5 ", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })

    it("sould return Error when dividing by 0", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })
});
