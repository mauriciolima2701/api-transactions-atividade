import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function atualizarTransaction(req: Request, res: Response) {
	const { userId, id } = req.params;
	const { title, value, type } = req.body;

	const client = bankOfBrazil.allClients().find((user) => user.uid === userId);

	const transactions = client?.transactions.find((trans) => trans.uid === id);

	transactions!.title = title;
	transactions!.value = value;
	transactions!.type = type;

	return res.status(200).json({
		ok: true,
		message: "Transação atualizado com sucesso!!",
		data: transactions,
	} as IRespDefault);
}
