var hasOwnProperty_1 = Object.prototype.hasOwnProperty;

function hasValidRef(config) {
    console.log("S");
    {
      if (hasOwnProperty_1.call(config, 'ref')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.ref !== undefined;
}

const config1 = {"ref" : "wangdejun"}

console.log(hasOwnProperty_1(config1));