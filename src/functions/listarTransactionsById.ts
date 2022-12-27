import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function listarTransactionsById(req: Request, res: Response) {
	const { userId, id } = req.params;

	const client = bankOfBrazil.allClients().find((user) => user.uid === userId);

	if (!client) {
		return res.status(404).json({
			ok: false,
			message: "Usuário não encontrado!!",
		} as IRespDefault);
	}

	const transactions = client?.transactions.find((trans) => trans.uid === id);

	if (!transactions) {
		return res.status(404).json({
			ok: false,
			message: "Transação não encontrada!!",
		} as IRespDefault);
	}

	return res.status(200).json({
		ok: true,
		message: `Transação do usuário ${client?.name}`,
		data: transactions,
	} as IRespDefault);
}
