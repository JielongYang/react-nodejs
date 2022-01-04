const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/test_db?poolSize=5';
const connection = mongoose.createConnection(uri);

const Website = connection.model('Website', {
    name: String,
    url: String,
    alexa: Number
});

const aggregate = Website.aggregate([
    {
        $match: {
            alexa: { $gte: 200 }
        }
    },
    {
        $group: {
            _id: null, total: { $sum: "$alexa" }
        }
    }
]);
aggregate.exec(function (err, site) {
    if (err) return handleError(err);
    console.log('alexa总计：', site[0].total);
});
