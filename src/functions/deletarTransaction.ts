import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function deletarTransaction(req: Request, res: Response) {
	const { userId, id } = req.params;

	const client = bankOfBrazil.allClients().find((user) => user.uid === userId);

	const transactionIndex = client!.transactions.findIndex(
		(trans) => trans.uid === id
	);

	if (transactionIndex < 0) {
		return res.status(404).json({
			ok: false,
			message: "Transação não encontrada!",
		} as IRespDefault);
	}
	client?.transactions.splice(transactionIndex, 1);

	res.status(200).json({
		ok: true,
		message: "Transação deletada com sucesso!!",
	} as IRespDefault);
}
