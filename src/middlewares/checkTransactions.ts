import { NextFunction, Request, Response } from "express";
import IRespDefault from "../interfaces/IRespDefault";
import bankOfBrazil from "../classes/Bank";

const checkTransactions = (req: Request, res: Response, next: NextFunction) => {
	const { userId } = req.params;
	const { title, value, type } = req.body;

	// const client = bankOfBrazil.allClients().find((cli) => cli.uid === userId);

	const client = bankOfBrazil.verifyId(userId);

	if (!client) {
		return res.status(404).json({
			ok: false,
			message: "Usuário não encontrado!!",
		} as IRespDefault);
	}

	if (type !== "income" && type !== "outcome") {
		return res.status(404).json({
			ok: false,
			message:
				'O tipo do valor está inválido, informe corretamente o tipo ("income" ou "outcome")',
		} as IRespDefault);
	}

	if (!type || !title || !value) {
		return res.status(404).json({
			ok: false,
			message: "Informe tipo, titulo e valor da transação!",
		} as IRespDefault);
	}

	next();
};

export default checkTransactions;
