contract('Example', function(accounts) {
  it("should assert true", function(done) {
    var example = Example.at(Example.address);
    
    example.value.call().then(function(value) {
    	assert.equal(value, 0, "Value should be zero after deployment.");
    }).then(function() {
    	return example.setValue(5);
    }).then(function(tx) {
    	return example.value.call();
    }).then(function(value) {
    	assert.equal(value, 5, "Value should be 5.")
    }).then(done).catch(done);
  });
});
