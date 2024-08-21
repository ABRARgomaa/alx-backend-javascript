var calculateNumber = require("./0-calcul")
const assert = require('assert');

describe("test suit", function() {
    it("test the calculateNumber function", function() {
        const result = calculateNumber(2, 3);
        assert.strictEqual(result, 5);
    });
});
