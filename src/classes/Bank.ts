import IClients from "../interfaces/IClients";
import Client from "./Client";

class Bank {
	ag: string;
	name: string;
	clients: Array<IClients>;
	manager: {
		uid: string;
		name: string;
		password: string;
	};

	constructor() {
		this.ag = "001";
		this.name = "Bank of Brazil";
		this.manager = {
			uid: "1321as-4s5a4s-ded45d-op90sa",
			name: "Mauricio",
			password: "12345",
		};
		this.clients = [];
	}

	addNewClientToArray(client: Client) {
		this.clients.push(client);
	}

	findCpf(cpf: string) {
		return this.clients.some((cli) => cli.cpf === cpf);
	}

	allClients(): IClients[] {
		return this.clients;
	}

	verifyId(id: string): boolean {
		return this.clients.some((cli) => cli.uid === id);
	}
}

const bankOfBrazil = new Bank();

export default bankOfBrazil;
