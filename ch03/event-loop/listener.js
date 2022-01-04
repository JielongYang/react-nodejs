var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('listener1');
}
var listener2 = function listener2() {
    console.log('listener2');
}

eventEmitter.addListener('someEvent', listener1);
eventEmitter.addListener('someEvent', listener2);
console.log(eventEmitter.listenerCount('someEvent') + " 个监听器监听连接事件");
eventEmitter.emit('someEvent');

eventEmitter.removeListener('someEvent', listener1);
console.log(eventEmitter.listenerCount('someEvent') + " 个监听器监听连接事件");
eventEmitter.emit('someEvent');