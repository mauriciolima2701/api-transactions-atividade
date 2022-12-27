import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function listarTransactions(req: Request, res: Response) {
	const { userId } = req.params;
	const { type, title } = req.query;

	const client = bankOfBrazil.allClients().find((user) => user.uid === userId);

	if (!client?.transactions) {
		return res.status(404).json({
			ok: false,
			message: `Transacão do usuário ${client!.name} não encontrada!`,
		} as IRespDefault);
	}

	let somarIncome = 0;
	let somarOutcome = 0;
	for (let transactions of client.transactions) {
		if (transactions.type === "income") {
			somarIncome += transactions.value;
		}

		if (transactions.type === "outcome") {
			somarOutcome += transactions.value;
		}
	}

	let result = somarIncome - somarOutcome;

	// --------- OU essa resolução ------------

	// const transactionClient_income = client.transactions
	// 	.map((trans_income) =>
	// 		trans_income.type === "income" ? trans_income.value : 0
	// 	)
	// 	.reduce((acc, next) => acc + next);

	// const transactionClient_outcome = client?.transactions
	// 	.map((trans_outcome) =>
	// 		trans_outcome.type === "outcome" ? trans_outcome.value : 0
	// 	)
	// 	.reduce((acc, next) => acc + next);

	// const resultTotal = transactionClient_income - transactionClient_outcome;

	if (!type && !title) {
		res.status(200).json({
			ok: true,
			message: `Todas as transações do usuário ${client?.name}`,
			data: client.transactions,
			balance: {
				income: somarIncome,
				outcome: somarOutcome,
				Total: result,
			},
		});
	}

	const transactionType = client.transactions.filter(
		(trans) => trans.type === type
	);
	const transactionTitle = client.transactions.filter(
		(trans) => trans.title === title
	);

	if (type) {
		return res.json({
			message: "Transação filtrada por tipo",
			transacao: transactionType,
		});
	}

	if (title) {
		return res.json({
			message: "Transação filtrada por titulo",
			transacao: transactionTitle,
		});
	}
}
