// First test!
var should = require('should');


describe('a suite of tests', function(){
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  })

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 200);
  })

  it('should be the number 5', function(done){
    (5).should.be.exactly(5).and.be.a.Number;
    done();
  })

})
