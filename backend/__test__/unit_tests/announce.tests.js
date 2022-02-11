const chai = require('chai')
const expect = chai.expect;
chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index');

describe('GET one announce by id', function () {
    it('should give a json with one announce matching id in params', function (done) {
        chai.request(app)
            .get(`/v1/announces/`)
            .query({id:1})
            .end(function (err, res) {
                expect(200, done)
                expect(err).to.be.null;
                expect(res).to.be.json;
            done();
            });
    });
});

describe('GET all announces from database', function () {
    it('should give a json with all announces', function (done) {
        chai.request(app)
            .get(`/v1/announces`)
            .end(function (err,res) {
                expect(200, done)
                expect(err).to.be.null;
                expect(res).to.be.json;
            done();
            });
    });
});

describe('POST to create a announce in database', function () {
    it('should give a json with the new announce content.', function (done) {
        chai.request(app)
            .post(`/v1/announces`)
            .set('content-type','application/json')
            .send({
                "title": "Chai",
                "image": "http://image",
                "description": "chai test",
                "category": "Chai",
                "visitor_id": 1
            })
            .end(function (err,res) {
                expect(200, done)
                expect(err).to.be.null;
                expect(res).to.be.json;
            done();
            });
    });
});

// describe('PATCH to update a user in database', function () {
//     it('should give a json with the updated user, or an error with nickname or mail already used.', function (done) {
//         chai.request(app)
//             .post(`/v1/users/`)
//             .set('content-type','application/json')
//             .query({id:1})
//             .send({
//                 "nickname": "Chai",
//                 "mail": "chai@chai.com",
//                 "password": "chai123",
//                 "city": "Paris",
//             })
//             .end(function (err,res) {
//                 expect(200, done)
//                 expect(err).to.be.null;
//                 expect(res).to.be.json;
//             done();
//             });
//     });
// });

// describe('DELETE user from database', function () {
//     it('should give a response with deletion complete.', function (done) {
//         chai.request(app)
//             .delete(`/v1/users/`)
//             .query({id:1})
//             .end(function (err, res) {
//                 expect(200, done)
//                 expect(err).to.be.null;
//                 expect(res).to.be.string;
//             done();
//             });
//     });
// });