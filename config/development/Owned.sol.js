"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Owned = (function (_Pudding) {
    _inherits(Owned, _Pudding);

    function Owned() {
      _classCallCheck(this, Owned);

      _get(Object.getPrototypeOf(Owned.prototype), "constructor", this).apply(this, arguments);
    }

    return Owned;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Owned.abi = [{ "inputs": [], "type": "constructor" }];
  Owned.binary = "606060405260008054600160a060020a0319163317905560068060226000396000f3606060405200";

  if ("" != "") {
    Owned.address = "";

    // Backward compatibility; Deprecated.
    Owned.deployed_address = "";
  }

  Owned.generated_with = "1.0.2";
  Owned.contract_name = "Owned";

  return Owned;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Owned = factory;
}