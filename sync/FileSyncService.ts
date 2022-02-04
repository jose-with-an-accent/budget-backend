import * as csv from 'csv-parser';
import * as fs from 'fs';
import {AccountTransaction} from '../Models/Transaction';
enum FileTypes {
	JSON, CSV
}
type TransactionT = {
	description: string,
	date: string,
	balance: number,
	amount: number,

}
export default class FileSyncService {
	public static fromFile(filePath: string): Array<TransactionT> {
		let transactions: Array<TransactionT> = [];
		fs.createReadStream(filePath)
			.pipe(csv())
			.on('data', (data) => {
				const t = {description: data["Description"], date: data["Posting Date"], balance: data["Amount"], amount: data["Balance"]}
				transactions.push(t);
			})
		console.log(transactions)
		return transactions;
	}
}
