"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var PredictionMarket = (function (_Pudding) {
    _inherits(PredictionMarket, _Pudding);

    function PredictionMarket() {
      _classCallCheck(this, PredictionMarket);

      _get(Object.getPrototypeOf(PredictionMarket.prototype), "constructor", this).apply(this, arguments);
    }

    return PredictionMarket;
  })(Pudding);

  ;

  // Set up specific data for this class.
  PredictionMarket.abi = [{ "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }], "name": "buyOrder", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "awardBuyers", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "revert", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }], "name": "sellOrder", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "orders", "outputs": [{ "name": "seller", "type": "address" }, { "name": "buyer", "type": "address" }, { "name": "odds", "type": "uint256" }, { "name": "sellerQuantity", "type": "uint256" }, { "name": "buyerQuantity", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }, { "name": "quantity", "type": "uint256" }], "name": "cancelOrder", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "awardSellers", "outputs": [], "type": "function" }];
  PredictionMarket.binary = "606060405260008054600160a060020a0319163317905561063d806100246000396000f3606060405236156100615760e060020a600035046322f85eaa811461006357806358eae004146101985780637da3c3ab1461019857806397514d90146101b6578063a85c38ef1461025e578063b6ed0632146102b9578063b6f29d5014610198575b005b61006160043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150339b50349a505b60008b11156102f557600099506000985060018d039750600096505b60015460ff88161015610304576001805488908110156100025760009182526005027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf781015460008051602061061d833981519152919091019750600160a060020a0316148015610175575060028601548890115b1561018c57600286015460019a5096985095965087955b60019690960195610100565b610061600054600160a060020a039081163390911614156101b4575b565b6100616004356040805160a08181018352600080835260208381018290528385018290526060848101839052608094850183905285519384018652338085529184019290925293820185905234908201819052606485810390820204819003928201839052600180548082018083559294939282818380158290116105bb5760008390526105bb90600590810260008051602061061d83398151915290810191840201610474565b6102be60043560018054829081101561000257600091825260050260008051602061061d833981519152019050805460018201546002830154600384015460049490940154600160a060020a03938416955091909216929085565b610061565b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b50505050505050505050505050565b891561036157600180548a9081101561000257600091825260050260008051602061061d83398151915201905060048101549095508b106103dc57600185018054600160a060020a0319168d1790556004850154909a03996104cf565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c81526020015090506001600050805480600101828181548183558181151161055657600083905261055690600590810260008051602061061d83398151915290810191840201610474565b8a85600201600050548c6064020403935084600301600050548410156104b6576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c905260018054808201808355929550909182818380158290116104d45760008390526104d490600590810260008051602061061d833981519152908101918402015b80821115610552578054600160a060020a0319908116825560018201805490911681556000600283018190556003830181905560049290920191909155610474565b600185018054600160a060020a0319168d17905560009a505b6105b6565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c5550998401805484900390556000996104cf565b5090565b5050509190906000526020600020906005020160005080548351600160a060020a0319918216178255602084015160018301805490921617905560408301516002820155606083015160038201556080830151600491909101555060009a505b6100e4565b5050509190906000526020600020906005020160005080548351600160a060020a03199182161782556020840151600183018054909216179055604083015160028201556060830151600382015560808301516004919091015550505050505056b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("" != "") {
    PredictionMarket.address = "";

    // Backward compatibility; Deprecated.
    PredictionMarket.deployed_address = "";
  }

  PredictionMarket.generated_with = "1.0.2";
  PredictionMarket.contract_name = "PredictionMarket";

  return PredictionMarket;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.PredictionMarket = factory;
}