import BudgetHelper, { Budget } from "../models/Budget";
import * as path from 'path'
import FileSyncService from "../sync/FileSyncService";
const router = require('express').Router()
const USER = 1

router.get('/', (req, res) => {
	res.end(BudgetHelper.findAll())
})

router.post('/', (req, res) => {
	res.send(BudgetHelper.create(req.body.name, USER))
})
router.get('/transaction_upload', (req, res) => {
	res.sendFile(path.resolve('./static/transaction_upload.html'))
})
router.post('/transaction_upload', async (req, res) => {
	try {
		if (!req.files) {
			res.send({
				status: false,
				message: 'No file uploaded'
			})
		} else {
			let fileToAnalyze = req.files.file
			fileToAnalyze.mv('./upload/' + fileToAnalyze.name)

			const transactions = FileSyncService.fromFile('./upload/' + fileToAnalyze.name)
			console.log(transactions)
		}

	} catch (e) {
		res.status(500).err(e)
	}
})
router.get('/:id', (req, res) => {
	res.send(BudgetHelper.findbyPK(req.params.id))
})


module.exports = router;