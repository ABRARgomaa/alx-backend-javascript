const getPaymentTokenFromAPI = require("./6-payment_token");
const chai = require("chai");
const expect = chai.expect;

describe("test suit for promise", function() {
    it("should return a resolved promise with the correct data when success is true", function(done) {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.deep.equal({ data: 'Successful response from the API' });
            done();
        }).catch(done);
    });
});
