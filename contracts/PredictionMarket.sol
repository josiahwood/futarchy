import "Owned";

contract PredictionMarket is Owned
{
	struct Order
	{
		address seller;
		address buyer;
		uint odds;				// in %
		uint sellerQuantity;	// in wei
		uint buyerQuantity;		// in wei
	}

	Order[] public orders;

	function ordersLength() constant
		returns(uint result)
	{
		return orders.length;
	}

	function sellOrder(uint odds)
	{
		var seller = msg.sender;
		var sellerQuantity = msg.value;
		var buyerQuantity = sellerQuantity * 100 / (100 - odds) - sellerQuantity;
		var order = Order(seller, 0, odds, sellerQuantity, buyerQuantity);
		orders.push(order);
	}

	function buyOrder(uint odds)
	{
		var buyer = msg.sender;
		var buyerQuantity = msg.value;
		
		while(buyerQuantity > 0)
		{
			var maxOddsFound = false;
			var maxOddsIndex = 0;
			var maxOdds = odds - 1;

			for(var i = 0; i < orders.length; i++)
			{
				var o = orders[i];

				if(o.buyer == 0 && o.odds > maxOdds)
				{
					maxOddsFound = true;
					maxOddsIndex = i;
					maxOdds = o.odds;
				}
			}

			if(maxOddsFound)
			{
				var mo = orders[maxOddsIndex];

				if(buyerQuantity >= mo.buyerQuantity)
				{
					// maxOdds only partially fills order

					mo.buyer = buyer;
					buyerQuantity -= mo.buyerQuantity;
				}
				else
				{
					// maxOdds completely fills order

					var mSellerQuantity = buyerQuantity * 100 / mo.odds - buyerQuantity;

					if(mSellerQuantity < mo.sellerQuantity)
					{
						// create a new order that represents the completed trade
						var completedOrder = Order(mo.seller, buyer, mo.odds, mSellerQuantity, buyerQuantity);
						orders.push(completedOrder);

						// adjust maxOdds in place to preserve the order's priority
						mo.buyerQuantity -= buyerQuantity;
						mo.sellerQuantity -= mSellerQuantity;

						buyerQuantity = 0;
					}
					else
					{
						// everything must just be off by a rounding error, so just call it even
						// I'm not sure that it is even possible to get here

						mo.buyer = buyer;
						buyerQuantity = 0;
					}
				}
			}
			else
			{
				// no suitable existing order found, so create a new one

				var sellerQuantity = buyerQuantity * 100 / odds - buyerQuantity;

				var order = Order(0, buyer, odds, sellerQuantity, buyerQuantity);
				orders.push(order);

				buyerQuantity = 0;
			}
		}
	}

	function cancelOrder(uint odds, uint quantity)
	{

	}

	function awardBuyers() onlyowner
	{

	}

	function awardSellers() onlyowner
	{

	}

	function revert() onlyowner
	{

	}
}