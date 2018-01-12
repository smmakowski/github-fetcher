//set process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
// const server = require('../server/index.js');

const testhelpers = require('./testhelpers.js');

chai.use(chaiHttp);

describe('Express Server', () => {
  describe('/freebietest', () => {
    it('should be able to test and endpoint with current testing suite', () => {
      chai.request('localhost:3000')
        .get('/freebietest')
        .end((err, res) => {
          expect(res.body).to.equal('OK');
          done();
        });
    });
  });

  describe('/repos', () => {
    it('should get all the repos contained in the database', () => {

    });
    it('should sort repos according to the number of stars', () => {

    });
    it('repo objects should have correct keys, and types for key' , () => {

    });
  });
  describe('/users', () => {
    let list;
    let fakeUser;
    chai.request('localhost:3000')
    .get('/users')
    .end((err, res) => {
      list = res.data;
      fakeUser = findFakeUserObj(list);
      done()
    })
    it('should get all the users contained in database', () => {
      expect(list).to.be.an('array');
      expect(list.length).to.be.at.least(1);
    });
    it('user object should have appropriate keys and types for key', () => {
      expect(fakeUser).to.be.an('object');
      expect(fakeUser.username).to.be.a('string');
      expect(fakeUser.profile_url).to.be.a('string');
      expect(fakeUser.friends).to.be.an('array');
      expect(fakeUser.friends).to.have.length(3);
      expect(fakeUser.repos).to.be.an('array');
      expect(fakeUser.repos).to.have.length(3);
    });
  });
  describe('/repos/import', () => {

  });
});
