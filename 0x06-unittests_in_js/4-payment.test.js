const sinon = require('sinon');
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const chai = require("chai")
const expect = chai.expect

describe("sendPaymentRequestToApi", function() {
    let consoleLogSpy;
    let calculateNumberStub;

    beforeEach(function() {
        consoleLogSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    });

    afterEach(function() {
        sinon.restore();
    });

    it("should call Utils.calculateNumber with 'SUM', 100, 20 and print the result", function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
