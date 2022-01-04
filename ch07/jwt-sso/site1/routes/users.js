var express = require('express');
var jwt = require('express-jwt');
const sign = require('jsonwebtoken').sign;
var router = express.Router();

router.post('/login', function (req, res, next) {
    res.json({
        code: 0,
        token: sign({ name: req.body.name }, 'jwt_secret', {
            expiresIn: "600s"
        }),
    })
});

router.post('/validate', jwt({ secret: 'jwt_secret' }), function (req, res, next) {
    res.json({ code: 0, msg: JSON.stringify(req.user) });
});

module.exports = router;
