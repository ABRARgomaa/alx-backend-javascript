const sendPaymentRequestToApi = require("./5-payment");
const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

describe("test case for hooks", function() {
    let consoleLog;
    beforeEach(function() {
        consoleLog = sinon.spy(console, 'log');
    })
    afterEach(function(){
        sinon.restore();
    })
    it("sendPaymentRequestToAPI with 100, and 20", function() {
        
        sendPaymentRequestToApi(100, 20);
        expect(consoleLog.calledWith('The total is: 120')).to.be.true;
        expect(consoleLog.callCount).to.be.equal(1);
    });
    it("sendPaymentRequestToAPI with 10, and 10", function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLog.calledWith('The total is: 20')).to.be.true;
        expect(consoleLog.callCount).to.be.equal(1);
    });
});
