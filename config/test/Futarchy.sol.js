"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Futarchy = (function (_Pudding) {
    _inherits(Futarchy, _Pudding);

    function Futarchy() {
      _classCallCheck(this, Futarchy);

      _get(Object.getPrototypeOf(Futarchy.prototype), "constructor", this).apply(this, arguments);
    }

    return Futarchy;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Futarchy.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "proposals", "outputs": [{ "name": "marketEndTime", "type": "uint256" }, { "name": "acceptanceMarket", "type": "address" }, { "name": "rejectionMarket", "type": "address" }, { "name": "preConditionEvaluationTime", "type": "uint256" }, { "name": "preCondition", "type": "uint8" }, { "name": "metricEvaluationTime", "type": "uint256" }, { "name": "metric", "type": "uint8" }, { "name": "action", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "marketEndTime", "type": "uint256" }, { "name": "preConditionEvaluationTime", "type": "uint256" }, { "name": "preCondition", "type": "uint8" }, { "name": "metricEvaluationTime", "type": "uint256" }, { "name": "metric", "type": "uint8" }, { "name": "action", "type": "uint8" }], "name": "addProposal", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "index", "type": "uint256" }], "name": "evaluateProposalMarketEnd", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "index", "type": "uint256" }], "name": "evaluateProposalPreCondition", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Futarchy.binary = "60606040526127ce806100126000396000f3606060405260e060020a6000350463013cf08b811461003c5780631abc5f041461017f57806393d2f70d146102e3578063e97a477914610332575b005b610373600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5666007909102908101547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5638201547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5648301547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5658401547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5678501547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5688601547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e569909601549395600160a060020a03938416959290931693919260ff9182169290918181169161010090041688565b61003a60043560243560443560643560843560a435610160604081905260006060818152608082905260a082905260c082905260e0829052610100829052610120829052610140829052909182919089906110f8806105de83390180828152602001915050604051809103906000f09250886040516110f8806116d6833901908152604051908190036020019083f060408051610100810182528b8152602081018690529081018290529182018990526080820188905260a0820187905260c0820186905260e0820185905282546001810180855591939182818380158290116103a4576007028160070283600052602060002091820191016103a491905b808211156104965784815560018101805473ffffffffffffffffffffffffffffffffffffffff19908116825560028301805490911690556003820186905560048201805460ff1916905560058201869055600691909101805461ffff1916905561027e565b61003a600435600060006000508281548110156100025750508052600781027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301805442101561032e575b5050565b61003a6004356000600060006000508381548110156100025790600052602060002090600702016000509150816003016000505442101561049a575b505050565b606097885260809690965260a09490945260c09290925260e052610100908152610120919091526101409190915290f35b5050509190906000526020600020906007020160008390919091506000820151816000016000505560208201518160010160006101000a815481600160a060020a030219169083021790555060408201518160020160006101000a815481600160a060020a03021916908302179055506060820151816003016000505560808201518160040160006101000a81548160ff0219169083021790555060a0820151816005016000505560c08201518160060160006101000a81548160ff0219169083021790555060e08201518160060160016101000a81548160ff02191690830217905550505050505050505050505050565b5090565b7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5666007840290810154610160604052835460609081527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564830154600160a060020a039081166080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5658401541660a05260c0919091527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56782015460ff90811660e08190527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5688401546101009081527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56990940154808316610120529390930416610140526105d29183908114156105d957506001919050565b905061036e565b610002566060604081905260326002556020806110f883395060806040525160008054600160a060020a0319163317905580600360005081905550506110b3806100456000396000f3606060405236156100825760e060020a600035046322f85eaa811461008457806358eae0041461014857806361cc576d1461020e57806370e18692146102185780637da3c3ab1461030c57806397514d90146103f5578063a85c38ef146104c3578063b6ed063214610583578063b6f29d501461063c578063be8acd3f14610701575b005b61008260043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a06040519081016040528060008152602001600081526020016000815260200160008152602001600081526020015060036000505442101580610112575060018d105b8061011d575060638d115b15610aa75760405133600160a060020a031690600090349082818181858883f19350505050506104b4565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316148015906101d257508054600160a060020a0316600014155b15610f5957604051600382015460048301546001840154600160a060020a031692600092919091019082818181858883f1935050505050610fda565b61070c6002545b90565b610082600080548190600160a060020a03908116339091161415610f47576003544210610f47575b60015460ff83161015610f4757600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a031614156102c15760405181546003830154600160a060020a0391909116916000919082818181858883f150505050505b8054600160a060020a0316600014156103005760405160018201546004830154600160a060020a0391909116916000919082818181858883f150505050505b60019190910190610240565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316146103ae5760405160018201546004830154600160a060020a0391909116916000919082818181858883f150505050505b8054600160a060020a03166000146103e95780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b6001919091019061032b565b61008260043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a06040519081016040528060008152602001600081526020016000815260200160008152602001600081526020015060036000505442101580610483575060018d105b8061048e575060638d115b156107555760405133600160a060020a031690600090349082818181858883f150505050505b50505050505050505050505050565b61071e60043560018054829081101561000257506000526005026000805160206110938339815191528101546000805160206110738339815191528201547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98301547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8401547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf89490940154600160a060020a0392831694939092169285565b61008260043560243560035460009081908190421061059d575b60009250600091505b60015460ff83161015610deb5760018054839081101561000257600091909152600502600080516020611073833981519152019050821515610e33576002810154851415610f36576001810154600160a060020a039081163390911614801561061957508054600160a060020a03166000145b15610ebb576004810180548590039081905560009011610f095760019250610f1c565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316148015906106c657508054600160a060020a0316600014155b15610fe657604051815460038301546004840154600160a060020a0392909216926000929091019082818181858883f1935050505050611067565b61070c600154610215565b60408051918252519081900360200190f35b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b339b50349a505b60008b11156104b457600099506000985060018d039750600096505b60015460ff881610156107ec57600180548890811015610002576000918252600502600080516020611073833981519152018054909750600160a060020a03161480156107c9575060028601548890115b156107e057600286015460019a5096985095965087955b60019690960195610778565b891561084a576002889055600180548a9081101561000257600091825260050260008051602061107383398151915201905060038101549095508b106108c8578454600160a060020a0319168c1785556003850154909a03996109ba565b8a8d6064038c6064020403915060a0604051908101604052808d8152602001600081526020018e81526020018c815260200183815260200150905060016000508054806001018281815481835581811511610a40576000839052610a4090600590810260008051602061107383398151915290810191840201610963565b8a85600201600050546064038c6064020403935084600401600050548410156109a5576040805160a0810182528d8152600187810154600160a060020a03166020830152600288015492820192909252606081018d90526080810186905281548083018084559195509082818380158290116109bf5760008390526109bf906005908102600080516020611073833981519152908101918402015b80821115610a3c578054600160a060020a0319908116825560018201805490911681556000600283018190556003830181905560049290920191909155610963565b8454600160a060020a0319168c17855560009a505b610aa2565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180548790039055860180549c909c03909b5560009a506109ba565b5090565b5050509190906000526020600020906005020160005080548351600160a060020a03199182161782556001820180546020860151921691909117905560408301516002820155606083015160038201556080830151600491909101555060009a505b61075c565b339b50349a505b60008b11156104b45760009950600098508c6001019750600096505b60015460ff88161015610b5057600180548890811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019750600160a060020a0316148015610b2d575060028601548890105b15610b4457600286015460019a5096985095965087955b60019690960195610aca565b8915610bd1576002889055600180548a908110156100025750600052600589027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8101546000805160206110738339815191529190910195508b10610c4c57600185018054600160a060020a0319168d1790556004850154909a0399610d01565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c815260200150905060016000508054806001018281815481835581811511610d84576000839052610d8490600590810260008051602061107383398151915290810191840201610963565b8a85600201600050548c606402040393508460030160005054841015610ce8576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c90526001805480820180835592955090918281838015829011610d06576000839052610d0690600590810260008051602061107383398151915290810191840201610963565b600185018054600160a060020a0319168d17905560009a505b610de6565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c555099840180548490039055600099610d01565b5050509190906000526020600020906005020160005080548351600160a060020a03199182161782556001820180546020860151921691909117905560408301516002820155606083015160038201556080830151600491909101555060009a505b610aae565b8215610f4057600180546000198101808355909190828015829011610f3b576000839052610f3b90600590810260008051602061107383398151915290810191840201610963565b80600160005060018403815481101561000257600091825260050260008051602061107383398151915201905080548254600160a060020a0319918216600160a060020a039182161783556001848101549084018054909316911617905560028281015490820155600382810154908201556004918201549101555b600191909101906105a6565b8054600160a060020a0390811633909116148015610ee657506001810154600160a060020a03166000145b15610f36576003810180548590039081905560009011610f215760019250610f36565b6004810154606481028690040360038201555b610f36565b60038101546064868103908202040360048201555b610eaf565b505050505b5050505050565b5050565b600054600160a060020a0316ff5b6001810154600160a060020a0316600014610f9f5760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050610fda565b8054600160a060020a0316600014610fda5780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b60019190910190610167565b6001810154600160a060020a031660001461102c5760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050611067565b8054600160a060020a03166000146110675780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b6001919091019061065b56b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf76060604081905260326002556020806110f883395060806040525160008054600160a060020a0319163317905580600360005081905550506110b3806100456000396000f3606060405236156100825760e060020a600035046322f85eaa811461008457806358eae0041461014857806361cc576d1461020e57806370e18692146102185780637da3c3ab1461030c57806397514d90146103f5578063a85c38ef146104c3578063b6ed063214610583578063b6f29d501461063c578063be8acd3f14610701575b005b61008260043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a06040519081016040528060008152602001600081526020016000815260200160008152602001600081526020015060036000505442101580610112575060018d105b8061011d575060638d115b15610aa75760405133600160a060020a031690600090349082818181858883f19350505050506104b4565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316148015906101d257508054600160a060020a0316600014155b15610f5957604051600382015460048301546001840154600160a060020a031692600092919091019082818181858883f1935050505050610fda565b61070c6002545b90565b610082600080548190600160a060020a03908116339091161415610f47576003544210610f47575b60015460ff83161015610f4757600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a031614156102c15760405181546003830154600160a060020a0391909116916000919082818181858883f150505050505b8054600160a060020a0316600014156103005760405160018201546004830154600160a060020a0391909116916000919082818181858883f150505050505b60019190910190610240565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316146103ae5760405160018201546004830154600160a060020a0391909116916000919082818181858883f150505050505b8054600160a060020a03166000146103e95780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b6001919091019061032b565b61008260043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a06040519081016040528060008152602001600081526020016000815260200160008152602001600081526020015060036000505442101580610483575060018d105b8061048e575060638d115b156107555760405133600160a060020a031690600090349082818181858883f150505050505b50505050505050505050505050565b61071e60043560018054829081101561000257506000526005026000805160206110938339815191528101546000805160206110738339815191528201547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98301547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8401547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf89490940154600160a060020a0392831694939092169285565b61008260043560243560035460009081908190421061059d575b60009250600091505b60015460ff83161015610deb5760018054839081101561000257600091909152600502600080516020611073833981519152019050821515610e33576002810154851415610f36576001810154600160a060020a039081163390911614801561061957508054600160a060020a03166000145b15610ebb576004810180548590039081905560009011610f095760019250610f1c565b610082600080548190600160a060020a03908116339091161415610f47575b60015460ff83161015610f4b57600180548390811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019250600160a060020a0316148015906106c657508054600160a060020a0316600014155b15610fe657604051815460038301546004840154600160a060020a0392909216926000929091019082818181858883f1935050505050611067565b61070c600154610215565b60408051918252519081900360200190f35b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b339b50349a505b60008b11156104b457600099506000985060018d039750600096505b60015460ff881610156107ec57600180548890811015610002576000918252600502600080516020611073833981519152018054909750600160a060020a03161480156107c9575060028601548890115b156107e057600286015460019a5096985095965087955b60019690960195610778565b891561084a576002889055600180548a9081101561000257600091825260050260008051602061107383398151915201905060038101549095508b106108c8578454600160a060020a0319168c1785556003850154909a03996109ba565b8a8d6064038c6064020403915060a0604051908101604052808d8152602001600081526020018e81526020018c815260200183815260200150905060016000508054806001018281815481835581811511610a40576000839052610a4090600590810260008051602061107383398151915290810191840201610963565b8a85600201600050546064038c6064020403935084600401600050548410156109a5576040805160a0810182528d8152600187810154600160a060020a03166020830152600288015492820192909252606081018d90526080810186905281548083018084559195509082818380158290116109bf5760008390526109bf906005908102600080516020611073833981519152908101918402015b80821115610a3c578054600160a060020a0319908116825560018201805490911681556000600283018190556003830181905560049290920191909155610963565b8454600160a060020a0319168c17855560009a505b610aa2565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180548790039055860180549c909c03909b5560009a506109ba565b5090565b5050509190906000526020600020906005020160005080548351600160a060020a03199182161782556001820180546020860151921691909117905560408301516002820155606083015160038201556080830151600491909101555060009a505b61075c565b339b50349a505b60008b11156104b45760009950600098508c6001019750600096505b60015460ff88161015610b5057600180548890811015610002576000918252600502600080516020611093833981519152810154600080516020611073833981519152919091019750600160a060020a0316148015610b2d575060028601548890105b15610b4457600286015460019a5096985095965087955b60019690960195610aca565b8915610bd1576002889055600180548a908110156100025750600052600589027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8101546000805160206110738339815191529190910195508b10610c4c57600185018054600160a060020a0319168d1790556004850154909a0399610d01565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c815260200150905060016000508054806001018281815481835581811511610d84576000839052610d8490600590810260008051602061107383398151915290810191840201610963565b8a85600201600050548c606402040393508460030160005054841015610ce8576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c90526001805480820180835592955090918281838015829011610d06576000839052610d0690600590810260008051602061107383398151915290810191840201610963565b600185018054600160a060020a0319168d17905560009a505b610de6565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c555099840180548490039055600099610d01565b5050509190906000526020600020906005020160005080548351600160a060020a03199182161782556001820180546020860151921691909117905560408301516002820155606083015160038201556080830151600491909101555060009a505b610aae565b8215610f4057600180546000198101808355909190828015829011610f3b576000839052610f3b90600590810260008051602061107383398151915290810191840201610963565b80600160005060018403815481101561000257600091825260050260008051602061107383398151915201905080548254600160a060020a0319918216600160a060020a039182161783556001848101549084018054909316911617905560028281015490820155600382810154908201556004918201549101555b600191909101906105a6565b8054600160a060020a0390811633909116148015610ee657506001810154600160a060020a03166000145b15610f36576003810180548590039081905560009011610f215760019250610f36565b6004810154606481028690040360038201555b610f36565b60038101546064868103908202040360048201555b610eaf565b505050505b5050505050565b5050565b600054600160a060020a0316ff5b6001810154600160a060020a0316600014610f9f5760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050610fda565b8054600160a060020a0316600014610fda5780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b60019190910190610167565b6001810154600160a060020a031660001461102c5760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050611067565b8054600160a060020a03166000146110675780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b6001919091019061065b56b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7";

  if ("0xc42bbcfd3b52c96b31acb495d7e5eba367535e43" != "") {
    Futarchy.address = "0xc42bbcfd3b52c96b31acb495d7e5eba367535e43";

    // Backward compatibility; Deprecated.
    Futarchy.deployed_address = "0xc42bbcfd3b52c96b31acb495d7e5eba367535e43";
  }

  Futarchy.generated_with = "1.0.2";
  Futarchy.contract_name = "Futarchy";

  return Futarchy;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Futarchy = factory;
}