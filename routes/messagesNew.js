const express = require('express');
const router = express.Router();
const Messages = require('../database/dbMessages');

router.post('/new',(
    req,
    res,
    next) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if (err) res.status(500).send(err);
        else res.status(201).jsonp(data);
    });
});
module.exports = router;
