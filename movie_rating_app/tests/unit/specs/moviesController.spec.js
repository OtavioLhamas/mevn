var movies = require('../../../controllers/moviesController.js');
let chaiHttp = require('chai-http');
let chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var express = require('express');
let server = require('../../../server.js');
var app = express();
chai.use(chaiHttp);

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require('events').EventEmitter
  })
}

describe('controllers.moviesController.js', function() {
  it('exists', function() {
    expect(movies).to.exist
  })
})

describe('/GET dummy_test', () => {
  it('it should respond with a name object', (done) => {
    chai.request(server)
      .get('/dummy_test')
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});