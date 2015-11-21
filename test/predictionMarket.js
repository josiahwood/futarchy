contract('PredictionMarket', function(accounts) {
 	it("contract initialization", function(done) {
  		var latestBlock = web3.eth.getBlock("latest");
  		var time = latestBlock.timestamp + 60;	// 1 minute from now
  		PredictionMarket.new(time).then(function(predictionMarket) {
  			PredictionMarket.address = predictionMarket.address;
  			return predictionMarket.ordersLength.call();
  		}).then(function(ordersLength) {
  			assert.equal(ordersLength, 0, "should be 0 orders initially");
  		}).then(done).catch(done);
	});

 	it("sellOrder 75% 2eth", function(done) {
	    var predictionMarket = PredictionMarket.at(PredictionMarket.address);

		predictionMarket.sellOrder.sendTransaction(75, {from:accounts[1], value:web3.toWei(2, "ether")})
		.then(function(tx) {
			return predictionMarket.ordersLength.call();
		}).then(function(ordersLength) {
			assert.equal(ordersLength.valueOf(), 1, "should be 1 order after sellOrder")
		}).then(function() {
			return predictionMarket.orders.call(0);
		}).then(function(order) {
			//address seller;
			//address buyer;
			//uint odds;			// in %
			//uint sellerQuantity;	// in wei
			//uint buyerQuantity;	// in wei
			assert.equal(order[0], accounts[1]);
			assert.equal(order[1], 0);
			assert.equal(order[2], 75);
			assert.equal(order[3], web3.toWei(2, "ether"));
			assert.equal(order[4], web3.toWei(6, "ether"));
		}).then(done).catch(done);
	});

 	it("buyOrder 50% 3eth", function(done) {
		var predictionMarket = PredictionMarket.at(PredictionMarket.address);

		predictionMarket.buyOrder.sendTransaction(50, {from:accounts[2], value:web3.toWei(3, "ether")})
		.then(function(tx) {
			return predictionMarket.ordersLength.call();
		}).then(function(ordersLength) {
			assert.equal(ordersLength, 2, "should be 2 orders after buyOrder")
			return predictionMarket.orders.call(0);
		}).then(function(order) {
			assert.equal(order[0], accounts[1]);
			assert.equal(order[1], 0);
			assert.equal(order[2], 75);
			assert.equal(order[3], web3.toWei(2, "ether"));
			assert.equal(order[4], web3.toWei(6, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(1);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[2]);
			assert.equal(order[2], 50);
			assert.equal(order[3], web3.toWei(3, "ether"));
			assert.equal(order[4], web3.toWei(3, "ether"));
		}).then(done).catch(done);
	});

	it("buyOrder 90% 15eth", function(done) {
		var predictionMarket = PredictionMarket.at(PredictionMarket.address);

		predictionMarket.buyOrder.sendTransaction(90, {from:accounts[3], value:web3.toWei(15, "ether")})
		.then(function(tx) {
			return predictionMarket.ordersLength.call();
		}).then(function(ordersLength) {
			assert.equal(ordersLength, 3, "should be 3 orders after buyOrder")
			return predictionMarket.orders.call(0);
		}).then(function(order) {
			assert.equal(order[0], accounts[1]);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 75);
			assert.equal(order[3], web3.toWei(2, "ether"));
			assert.equal(order[4], web3.toWei(6, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(1);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[2]);
			assert.equal(order[2], 50);
			assert.equal(order[3], web3.toWei(3, "ether"));
			assert.equal(order[4], web3.toWei(3, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(2);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 90);
			assert.equal(order[3], web3.toWei(1, "ether"));
			assert.equal(order[4], web3.toWei(9, "ether"));
		}).then(done).catch(done);
	});

	it("sellOrder 80% 0.5eth", function(done) {
		var predictionMarket = PredictionMarket.at(PredictionMarket.address);

		predictionMarket.sellOrder.sendTransaction(80, {from:accounts[4], value:web3.toWei(0.5, "ether")})
		.then(function(tx) {
			return predictionMarket.ordersLength.call();
		}).then(function(ordersLength) {
			assert.equal(ordersLength, 4, "should be 4 orders after sellOrder")
			return predictionMarket.orders.call(0);
		}).then(function(order) {
			assert.equal(order[0], accounts[1]);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 75);
			assert.equal(order[3], web3.toWei(2, "ether"));
			assert.equal(order[4], web3.toWei(6, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(1);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[2]);
			assert.equal(order[2], 50);
			assert.equal(order[3], web3.toWei(3, "ether"));
			assert.equal(order[4], web3.toWei(3, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(2);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 90);
			assert.equal(order[3], web3.toWei(0.5, "ether"));
			assert.equal(order[4].valueOf(), web3.toWei(4.5, "ether"), "orders[2].buyerQuantity should be 4.5eth");
		}).then(function () {
			return predictionMarket.orders.call(3);
		}).then(function(order) {
			assert.equal(order[0], accounts[4]);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 90);
			assert.equal(order[3], web3.toWei(0.5, "ether"));
			assert.equal(order[4].valueOf(), web3.toWei(4.5, "ether"), "orders[3].buyerQuantity should be 4.5eth");
		}).then(done).catch(done);
	});

	it("cancelOrder 90%", function(done) {
		var predictionMarket = PredictionMarket.at(PredictionMarket.address);

		predictionMarket.cancelOrder.sendTransaction(90, web3.toWei(4.5, "ether"), {from:accounts[3]})
		.then(function(tx) {
			return predictionMarket.ordersLength.call();
		}).then(function(ordersLength) {
			assert.equal(ordersLength.valueOf(), 3, "should be 3 orders after cancelOrder")
			return predictionMarket.orders.call(0);
		}).then(function(order) {
			assert.equal(order[0], accounts[1]);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 75);
			assert.equal(order[3], web3.toWei(2, "ether"));
			assert.equal(order[4], web3.toWei(6, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(1);
		}).then(function(order) {
			assert.equal(order[0], 0);
			assert.equal(order[1], accounts[2]);
			assert.equal(order[2], 50);
			assert.equal(order[3], web3.toWei(3, "ether"));
			assert.equal(order[4], web3.toWei(3, "ether"));
		}).then(function () {
			return predictionMarket.orders.call(2);
		}).then(function(order) {
			assert.equal(order[0], accounts[4]);
			assert.equal(order[1], accounts[3]);
			assert.equal(order[2], 90);
			assert.equal(order[3], web3.toWei(0.5, "ether"));
			assert.equal(order[4].valueOf(), web3.toWei(4.5, "ether"), "orders[2].buyerQuantity should be 4.5eth");
		}).then(done).catch(done);
	});

	it("awardBuyers", function(done) {
		var predictionMarket = PredictionMarket.at(PredictionMarket.address);
		var account1Value = web3.fromWei(web3.eth.getBalance(accounts[1]), "ether");
		var account2Value = web3.fromWei(web3.eth.getBalance(accounts[2]), "ether");
		var account3Value = web3.fromWei(web3.eth.getBalance(accounts[3]), "ether");
		var account4Value = web3.fromWei(web3.eth.getBalance(accounts[4]), "ether");

		predictionMarket.awardBuyers.sendTransaction({from:accounts[0]})
		.then(function(tx) {
			var newAccount1Value = web3.fromWei(web3.eth.getBalance(accounts[1]), "ether");
			var newAccount2Value = web3.fromWei(web3.eth.getBalance(accounts[2]), "ether");
			var newAccount3Value = web3.fromWei(web3.eth.getBalance(accounts[3]), "ether");
			var newAccount4Value = web3.fromWei(web3.eth.getBalance(accounts[4]), "ether");

			var delta = Number(web3.fromWei(1, "ether"));

			assert.closeTo(newAccount1Value.toNumber(), account1Value.toNumber(), delta, "accounts[1] should not change");
			assert.closeTo(newAccount2Value.toNumber(), account2Value.add(3).toNumber(), delta, "accounts[2] should increase by 3eth");
			assert.closeTo(newAccount3Value.toNumber(), account3Value.add(13).toNumber(), delta, "accounts[3] should increase by 10.5eth");
			assert.closeTo(newAccount4Value.toNumber(), account4Value.toNumber(), delta, "accounts[4] should not change");
		}).then(done).catch(done);
	});
});
