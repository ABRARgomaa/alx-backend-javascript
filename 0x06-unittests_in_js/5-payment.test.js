const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

describe("test case for hooks", function() {
    beforeEach(function() {
        sinon.restore();
    });
    it("sendPaymentRequestToAPI with 100, and 20", function() {
        const consoleLog = sinon.spy(console);
        sendPaymentRequestToApi(100, 20);
        expect(consoleLog.log.calledWith('The total is: 120')).to.be.true;
        expect(consoleLog.log.callCount).to.be.equal(1);
    });
    it("sendPaymentRequestToAPI with 10, and 10", function() {
        const consoleLog = sinon.spy(console);
        sendPaymentRequestToApi(10, 10);
        expect(consoleLog.log.calledWith('The total is: 20')).to.be.true;
        expect(consoleLog.log.callCount).to.be.equal(1);
    });
});
