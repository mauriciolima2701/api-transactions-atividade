import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function deletarClients(req: Request, res: Response) {
	const { uid } = req.params;

	const clientIndex = bankOfBrazil
		.allClients()
		.findIndex((cli) => cli.uid === uid);

	bankOfBrazil.allClients().splice(clientIndex, 1);

	return res.status(200).json({
		ok: true,
		message: "Usuário deletado com sucesso!!",
	} as IRespDefault);
}
