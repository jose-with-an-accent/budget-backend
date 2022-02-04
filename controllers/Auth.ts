import UserUtils from '../models/User';
import * as path from 'path';
const router = require('express').Router();



router.get('/', (req, res) => {
	res.sendFile(path.resolve('./static/login.html'))
})
module.exports = router;