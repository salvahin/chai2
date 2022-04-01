const { User } = require('../app');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
//Stub
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);


describe('User', (done)=>{
    it('should get the user id', function(done){
        const user = new User(2);
        const getStub = sinon.stub(axios,'get').resolves({data:{ data:{ id: 3}}});
        user.getUserId()
            .then(result => {
                console.log(result);
                expect(result).to.be.a('number');
                expect(result).to.be.eq(2);
               // expect(getStub).to.have.been.calledOnce;
               // expect(getStub).to.have.been.calledWith('https://reqres.in/api/users/2');
                done();
            })
            .catch(done);
    });
});
