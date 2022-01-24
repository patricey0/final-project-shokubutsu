const chai = require('chai')
const expect = chai.expect;
chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');

describe('GET one user by id', function () {
    it('should give a json with one user matching id in params', function (done) {
        chai.request(app)
            .get(`/v1/user/1`)
            .end(function (err, res) {
                expect(200, done)
                expect(err).to.be.null;
                expect(res).to.be.json;
            done();
            });
    });
});

describe('GET all users from database', function () {
    it('should give a json with all users', function (done) {
        chai.request(app)
            .get(`/v1/users`)
            .end(function (err,res) {
                expect(200, done)
                expect(err).to.be.null;
                expect(res).to.be.json;
            done();
            });
    });
});