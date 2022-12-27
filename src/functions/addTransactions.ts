import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import Transactions from "../classes/Transactions";
import IRespDefault from "../interfaces/IRespDefault";
import ITransactions from "../interfaces/ITransactions";

export default function addTransactions(req: Request, res: Response) {
	const { userId } = req.params;
	const { title, value, type } = req.body;

	const client = bankOfBrazil.allClients().find((cli) => cli.uid === userId);

	const newTransaction: ITransactions = new Transactions(title, value, type);

	client?.transactions.push(newTransaction);

	return res.status(200).json({
		ok: true,
		message: `Transação criada para o usuário ${client!.name} com sucesso!!`,
		data: client,
	} as IRespDefault);
}
