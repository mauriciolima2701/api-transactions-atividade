import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function listarClientsById(req: Request, res: Response) {
	const { uid } = req.params;

	const client = bankOfBrazil
		.allClients()
		.filter((user) => user.uid === uid)
		.map((client) => {
			const { uid, name, cpf, email, age } = client;
			return {
				uid,
				name,
				cpf,
				email,
				age,
			};
		});

	return res.status(200).json({
		ok: true,
		message: "Usuário encontrado!!",
		data: client,
	} as IRespDefault);
}
