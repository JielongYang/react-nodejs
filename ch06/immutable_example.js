const Immutable = require('immutable');

var obj = {
    count: 1,
    list: [1, 2, 3, 4, 5]
}
var map1 = Immutable.fromJS(obj);
var map2 = map1.set('count', 2);

console.log(map1 === map2);
console.log(map1.list === map2.list);