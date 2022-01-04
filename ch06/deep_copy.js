var _ = require('lodash');

var obj = {
    a: {
        count: 1
    },
    b: 1
};
var clone = _.cloneDeep(obj);
clone.a.count = 2;
clone.b = 2

console.log(obj)