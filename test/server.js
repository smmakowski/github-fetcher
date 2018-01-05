//set process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
// const server = require('../server/index.js');

chai.use(chaiHttp);

describe('Express Server', () => {
  describe('/freebietest', () => {
    it('should be able to test and endpoint with current testing suite', () => {
      chai.request('localhost:3000/freebietest')
        .get('/freebietest')
        .end((err, res) => {
          expect(res.body).to.equal('OK');
          done();
        })
    });
  });
});
