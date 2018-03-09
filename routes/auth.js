var express = require('express');
var router = express.Router();

/* POST do login. */
router.post('/login/:usr/:pasword', function (req, res, next) {
    res.json({
        token: 'flefgqjklawefw23lmn'
    });
});

module.exports = router;
