"use strict";
exports.__esModule = true;
var path = require("path");
var router = require('express').Router();
router.get('/', function (req, res) {
    res.sendFile(path.resolve('./static/login.html'));
});
module.exports = router;
