import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function listarClients(req: Request, res: Response) {
	const client = bankOfBrazil.allClients().map((client) => {
		const { uid, name, email, cpf } = client;
		return {
			uid,
			name,
			email,
			cpf,
		};
	});

	if (client.length === 0) {
		return res.status(418).json({
			ok: false,
			message: "Não tem usuários cadastrados!!",
		} as IRespDefault);
	}

	// console.log(client);

	return res.status(200).json({
		ok: true,
		message: "Todos os usuários da aplicação!!",
		data: client,
	} as IRespDefault);
}
