window.onload = function()
{
	var accounts = web3.eth.accounts;
	var myMarketInstance;

	for(var i = 0; i < accounts.length; i++)
	{
		$("#userAccounts").append(
			"<option value=\"" + accounts[i] + "\">" + accounts[i] + "</option>"
		)
	}

	// Update orders
	function updateOrders()
	{
		console.log("updateOrders");
		
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

      	var bidOrders = [];
      	var askOrders = [];

		var orderIteration = function oI(order)
		{
			if(order[0] == 0)
			{
				bidOrders.push(order);
			}
			else if(order[1] == 0)
			{
				askOrders.push(order);
			}
			else
			{
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

			if(orderIndex < ordersLength)
			{
				myMarketInstance.orders.call(orderIndex).then(oI);
			}
			else
			{
				bidOrders.sort(function(a, b){return b[2] - a[2];});

				for(var i = 0; i < bidOrders.length; i++)
				{
					var bid = bidOrders[i];

					$("#bids").append(
						"<tr>" +
							"<td>" + bid[1] + "</td>" +
							"<td>" + bid[2] + "</td>" +
							"<td>" + web3.fromWei(bid[4], "ether") + "</td>" +
						"</tr>"
					);
				}

				askOrders.sort(function(a, b){return a[2] - b[2];});

				for(var i = 0; i < askOrders.length; i++)
				{
					var ask = askOrders[i];

					$("#asks").append(
						"<tr>" +
							"<td>" + ask[0] + "</td>" +
							"<td>" + ask[2] + "</td>" +
							"<td>" + web3.fromWei(ask[3], "ether") + "</td>" +
						"</tr>"
					);
				}

				if(askOrders.length > 0)
				{
					$("#buyerOdds").val((askOrders[0])[2]);
				}

				if(bidOrders.length > 0)
				{
					$("#sellerOdds").val((bidOrders[0])[2]);
				}
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

	var latestBlock = web3.eth.getBlock("latest");
  	var time = latestBlock.timestamp + 600;	// 10 minutes from now
  	PredictionMarket.new(time, {from:accounts[0]}).then(function(predictionMarket) {
  		PredictionMarket.address = predictionMarket.address;
  		myMarketInstance = predictionMarket;
		$("#marketAddress").html(PredictionMarket.address);
  		updateOrders();
  	});
	
	//updateOrders();

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