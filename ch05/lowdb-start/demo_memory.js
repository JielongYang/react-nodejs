const fs = require('fs')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const Memory = require('lowdb/adapters/Memory')

const db = low(
    process.env.NODE_ENV === 'test'
        ? new Memory()
        : new FileSync('db.json')
)

db.defaults({ posts: [] })
    .write()

db.get('posts')
    .push({ title: 'lowdb' })
    .write()