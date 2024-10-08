const sinon = require('sinon');
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function() {
    afterEach(function() {
        sinon.restore();
    });

    it("sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20)", function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWith(spy, 'SUM', 100, 20);
    });
});
