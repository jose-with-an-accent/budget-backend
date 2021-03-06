import * as csv from 'csv-parser';
import * as fs from 'fs';
import AccountTransaction from '../Models/Transaction';
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
			.on('data', async (data) => {
				console.log(data);
				try {
					const a = await AccountTransaction.create({ name: data["Description"], balance: data["Balance"], amount: data["Amount"] })
				} catch (e) {
					console.log(e)
				}
			})

		return transactions;
	}
}
