contract('PredictionMarket', function(accounts) {
  it("contract initialization", function(done) {
    var predictionMarket = PredictionMarket.at(PredictionMarket.address);

	predictionMarket.sellOrder.sendTransaction(75, {value:web3.toWei(2, "ether")}).then(function(tx) {
		return predictionMarket.ordersLength.call();
	}).then(function(ordersLength) {
		assert.equal(ordersLength, 1, "should be 1 order after sellOrder")
	}).then(function() {
		return predictionMarket.orders.call(0);
	}).then(function(order) {
		console.log(order);
	}).then(done).catch(done);
  });
});
