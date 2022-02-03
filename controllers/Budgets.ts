import { Budget } from "../models/db";

const express = require('express'), router = express.router();

const USER = 1

router.get('/', (req: Request, res: Response) => {
	res.send(Budget.getBudgetFromUser(USER))
})
