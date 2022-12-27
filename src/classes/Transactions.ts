import { v4 as uuid } from "uuid";
import ITransactions from "../interfaces/ITransactions";

class Transactions implements ITransactions {
	uid: string;

	constructor(
		public title: string,
		public value: number,
		public type: "outcome" | "income"
	) {
		this.uid = uuid();
		this.title = title;
		this.value = value;
		this.type = type;
	}
}

export default Transactions;
