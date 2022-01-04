const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [], user: {}, count: 0 })
    .write()

db.get('posts')
    .push({ id: 1, title: 'lowdb is awesome' })
    .write()

db.set('user.name', 'XiaoMing')
    .write()

db.update('count', n => n + 1)
    .write()