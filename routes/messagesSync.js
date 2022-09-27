const express = require('express');
const router = express.Router();
const Messages = require('../database/dbMessages');

router.get('/sync',(
    req,
    res,
    next) => {
    Messages.find((err, data) => {
        if (err) return res.status(500).jsonp(err);
        return res.status(200).jsonp(data);
    });
});
module.exports = router;
