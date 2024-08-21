var calculateNumber = require("./0-calcul")
const assert = require('assert');

describe("calculateNumber", function() {
    it("should return 4 when rounding 1 and 3", function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it("should return 5 when rounding 1.1 and 3.5", function() {
        assert.strictEqual(calculateNumber(1.1, 3.5), 5);
    });
});
