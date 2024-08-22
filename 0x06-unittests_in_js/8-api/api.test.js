const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('./index');

chai.use(chaiHttp);

describe('Index Page Tests', function() {
  it('should return status code 200 for the index page', function(done) {
    chai.request(app)
    .get('/')
    .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        done();
    });
  });
  it('should return the correct result for the index page', function(done) {
    chai.request(app)
    .get('/')
    .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        done();
    });
  });
});
