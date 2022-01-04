const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/test_db?poolSize=5';
const connection = mongoose.createConnection(uri);

const Website = connection.model('Website', {
    name: String,
    url: String,
    alexa: Number
});

Website.findOne({ name: '百度' })
    .select('name url alexa')
    .exec(function (err, site) {
        if (err) return handleError(err);
        console.log('%s %s %s', site.name, site.url,
            site.alexa);
    });
