window.onload = function() {
	var accounts = web3.eth.accounts;
	var myMarketInstance = PredictionMarket.at(PredictionMarket.address);

	$("#marketAddress").html(PredictionMarket.address);

	for(var i = 0; i < accounts.length; i++)
	{
		$("#userAccounts").append(
			"<option value=\"" + accounts[i] + "\">" + accounts[i] + "</option>"
		)
	}

	// Update orders
	function updateOrders() {
		var ordersLength;
		var orderIndex = 0;

		$("#bids").empty();
		$("#asks").empty();
		$("#completedTrades").empty();

		$("#bids").append(
			"<tr>" +
        		"<td>Buyer</td>" +
        		"<td>Odds</td>" +
        		"<td>Quantity</td>" +
      		"</tr>"
      	)

      	$("#asks").append(
			"<tr>" +
        		"<td>Seller</td>" +
        		"<td>Odds</td>" +
        		"<td>Quantity</td>" +
      		"</tr>"
      	)

		$("#completedTrades").append(
			"<tr>" +
        		"<td>Seller</td>" +
        		"<td>Buyer</td>" +
        		"<td>Odds</td>" +
        		"<td>Seller Quantity</td>" +
        		"<td>Buyer Quantity</td>" +
      		"</tr>"
      	)

		var orderIteration = function oI(order) {
			if(order[0] == 0)
			{
				$("#bids").append(
					"<tr>" +
						"<td>" + order[1] + "</td>" +
						"<td>" + order[2] + "</td>" +
						"<td>" + web3.fromWei(order[4], "ether") + "</td>" +
					"</tr>"
				);
			}
			else if(order[1] == 0)
			{
				$("#asks").append(
					"<tr>" +
						"<td>" + order[0] + "</td>" +
						"<td>" + order[2] + "</td>" +
						"<td>" + web3.fromWei(order[3], "ether") + "</td>" +
					"</tr>"
				);
			} else {
				$("#completedTrades").append(
					"<tr>" +
						"<td>" + order[0] + "</td>" +
						"<td>" + order[1] + "</td>" +
						"<td>" + order[2] + "</td>" +
						"<td>" + web3.fromWei(order[3], "ether") + "</td>" +
						"<td>" + web3.fromWei(order[4], "ether") + "</td>" +
					"</tr>"
				);
			}

			orderIndex++;

			if(orderIndex < ordersLength) {
				myMarketInstance.orders.call(orderIndex).then(oI);
			}
		};

		myMarketInstance.ordersLength.call().then(function(length) {
			ordersLength = length;

			if(ordersLength > 0)
			{
				myMarketInstance.orders.call(0).then(orderIteration);
			}
		});
	}

	updateOrders();

	// sellOrder
	function sellOrder(address, odds, quantity)
	{
		var sellerQuantity = web3.toWei(quantity, "ether");
		myMarketInstance.sellOrder.sendTransaction(odds, {from:address, value:sellerQuantity}).then(updateOrders);
	}

	// buyOrder
	function buyOrder(address, odds, quantity)
	{
		var buyerQuantity = web3.toWei(quantity, "ether");
		myMarketInstance.buyOrder.sendTransaction(odds, {from:address, value:buyerQuantity}).then(updateOrders);
	}

	// cancelOrder
	function cancelOrder(address, odds, quantity)
	{
		var cancelQuantity = web3.toWei(quantity, "ether");
		myMarketInstance.cancelOrder.sendTransaction(odds, cancelQuantity, {from:address}).then(updateOrders);
	}

	// Wire up the UI elements
	$("#sellOrder").click(function() {
		var address = $("#userAccounts").val();
		var odds = $("#sellerOdds").val();
		var quantity = $("#sellerQuantity").val();
		sellOrder(address, odds, quantity);
	});

	$("#buyOrder").click(function() {
		var address = $("#userAccounts").val();
		var odds = $("#buyerOdds").val();
		var quantity = $("#buyerQuantity").val();
		buyOrder(address, odds, quantity);
	});

	$("#cancelOrder").click(function() {
		var address = $("#userAccounts").val();
		var odds = $("#cancelOdds").val();
		var quantity = $("#cancelQuantity").val();
		cancelOrder(address, odds, quantity);
	});
};