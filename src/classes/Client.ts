import { v4 as uuid } from "uuid";
import IClients from "../interfaces/IClients";
import ITransactions from "../interfaces/ITransactions";

class Client implements IClients {
	uid: string;
	transactions: Array<ITransactions>;

	constructor(
		public name: string,
		public cpf: string,
		public email: string,
		public age: number
	) {
		this.uid = uuid();
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.age = age;
		this.transactions = [];
	}
}

export default Client;
