"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Example = (function (_Pudding) {
    _inherits(Example, _Pudding);

    function Example() {
      _classCallCheck(this, Example);

      _get(Object.getPrototypeOf(Example.prototype), "constructor", this).apply(this, arguments);
    }

    return Example;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Example.abi = [{ "constant": true, "inputs": [], "name": "value", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "val", "type": "uint256" }], "name": "setValue", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Example.binary = "60606040526000805560408060146000396000f3606060405260e060020a60003504633fa4f245811460245780635524107714602c575b005b603660005481565b6004356000556022565b6060908152602090f3";

  if ("0xd853dbf029c2216f29481a7f90a05f2dba8ab738" != "") {
    Example.address = "0xd853dbf029c2216f29481a7f90a05f2dba8ab738";

    // Backward compatibility; Deprecated.
    Example.deployed_address = "0xd853dbf029c2216f29481a7f90a05f2dba8ab738";
  }

  Example.generated_with = "1.0.2";
  Example.contract_name = "Example";

  return Example;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Example = factory;
}