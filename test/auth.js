var request = require('superagent');

var chai = require('chai');
var expect = chai.expect;

var cookie;

describe('Auth', function(){
 it ('should send 200', function(done){
  request.post('http://test.selfish.frumatic.com/api/Auth')
  .send({
    "params":{
      "authType":"Direct",
      "authAccountId":"noel@mail.ru",
      "password":"123456"
    }
  })
  .end(function(res){
    cookie = res.headers['set-cookie'];
    expect(res).to.exist;
    expect(res.status).to.equal(200);
    done();
   });
  });
});

describe('GetUser', function(){
  it ('should send userInfo', function(done){
    request.post('http://test.selfish.frumatic.com/api/GetAccount')
    .set('cookie', cookie)
    .send({"params":{"accountId":null}})
    .end(function(res){
      expect(res).to.exist;
      expect(res.status).to.equal(200);
      done();
     });
  });
});
