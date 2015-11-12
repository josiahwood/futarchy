"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Proposal = (function (_Pudding) {
    _inherits(Proposal, _Pudding);

    function Proposal() {
      _classCallCheck(this, Proposal);

      _get(Object.getPrototypeOf(Proposal.prototype), "constructor", this).apply(this, arguments);
    }

    return Proposal;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Proposal.abi = [{ "inputs": [], "type": "constructor" }];
  Proposal.binary = "606060405260606106648061006d833901809050604051809103906000f060405160018054600160a060020a03191692909217909155610664806106d1833901809050604051809103906000f060028054600160a060020a031916919091179055600680610d356000396000f3606060405260008054600160a060020a03191633179055610640806100246000396000f3606060405236156100615760e060020a600035046322f85eaa811461006357806358eae004146101985780637da3c3ab1461019857806397514d90146101b6578063a85c38ef1461029c578063b6ed0632146102f6578063b6f29d5014610198575b005b61006160043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150339b50349a505b60008b111561039a57600099506000985060018d039750600096505b60015460ff881610156103a9576001805488908110156100025760009182526005027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7810154600080516020610620833981519152919091019750600160a060020a0316148015610175575060028601548890115b1561018c57600286015460019a5096985095965087955b60019690960195610100565b610061600054600160a060020a039081163390911614156101b4575b565b6100616004356040805160a0818101835260008083526020838101829052838501829052606084810183905260809485018390528551938401865233808552918401929092529382018590523490820181905260648581039082020481900392820183905260018054808201808355929493928281838015829011610332576000839052610332906005908102600080516020610620833981519152908101918402015b80821115610396578054600160a060020a031990811682556001820180549091168155600060028301819055600383018190556004929092019190915561025a565b6102fb600435600180548290811015610002576000918252600502600080516020610620833981519152019050805460048201546001830154600284015460039490940154600160a060020a039384169550921692919085565b610061565b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b5050509190906000526020600020906005020160005082518154600160a060020a0319908116909117825560208401516001830180549092161790556040830151600282015560608301516003820155608083015160049190910155505050505050565b5090565b50505050505050505050505050565b891561040657600180548a9081101561000257600091825260050260008051602061062083398151915201905060048101549095508b1061048157600185018054600160a060020a0319168d1790556004850154909a0399610536565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c8152602001509050600160005080548060010182818154818355818115116105b95760008390526105b99060059081026000805160206106208339815191529081019184020161025a565b8a85600201600050548c60640204039350846003016000505484101561051d576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c9052600180548082018083559295509091828183801582901161053b57600083905261053b9060059081026000805160206106208339815191529081019184020161025a565b600185018054600160a060020a0319168d17905560009a505b61061b565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c555099840180548490039055600099610536565b5050509190906000526020600020906005020160005082518154600160a060020a03199081169091178255602084015160018301805490921617905560408301516002820155606083015160038201556080830151600491909101555060009a505b6100e456b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6606060405260008054600160a060020a03191633179055610640806100246000396000f3606060405236156100615760e060020a600035046322f85eaa811461006357806358eae004146101985780637da3c3ab1461019857806397514d90146101b6578063a85c38ef1461029c578063b6ed0632146102f6578063b6f29d5014610198575b005b61006160043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150339b50349a505b60008b111561039a57600099506000985060018d039750600096505b60015460ff881610156103a9576001805488908110156100025760009182526005027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7810154600080516020610620833981519152919091019750600160a060020a0316148015610175575060028601548890115b1561018c57600286015460019a5096985095965087955b60019690960195610100565b610061600054600160a060020a039081163390911614156101b4575b565b6100616004356040805160a0818101835260008083526020838101829052838501829052606084810183905260809485018390528551938401865233808552918401929092529382018590523490820181905260648581039082020481900392820183905260018054808201808355929493928281838015829011610332576000839052610332906005908102600080516020610620833981519152908101918402015b80821115610396578054600160a060020a031990811682556001820180549091168155600060028301819055600383018190556004929092019190915561025a565b6102fb600435600180548290811015610002576000918252600502600080516020610620833981519152019050805460048201546001830154600284015460039490940154600160a060020a039384169550921692919085565b610061565b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b5050509190906000526020600020906005020160005082518154600160a060020a0319908116909117825560208401516001830180549092161790556040830151600282015560608301516003820155608083015160049190910155505050505050565b5090565b50505050505050505050505050565b891561040657600180548a9081101561000257600091825260050260008051602061062083398151915201905060048101549095508b1061048157600185018054600160a060020a0319168d1790556004850154909a0399610536565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c8152602001509050600160005080548060010182818154818355818115116105b95760008390526105b99060059081026000805160206106208339815191529081019184020161025a565b8a85600201600050548c60640204039350846003016000505484101561051d576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c9052600180548082018083559295509091828183801582901161053b57600083905261053b9060059081026000805160206106208339815191529081019184020161025a565b600185018054600160a060020a0319168d17905560009a505b61061b565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c555099840180548490039055600099610536565b5050509190906000526020600020906005020160005082518154600160a060020a03199081169091178255602084015160018301805490921617905560408301516002820155606083015160038201556080830151600491909101555060009a505b6100e456b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6606060405200";

  if ("" != "") {
    Proposal.address = "";

    // Backward compatibility; Deprecated.
    Proposal.deployed_address = "";
  }

  Proposal.generated_with = "1.0.2";
  Proposal.contract_name = "Proposal";

  return Proposal;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Proposal = factory;
}