import { Request, Response, NextFunction } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

const checkCpfToEquals = (req: Request, res: Response, next: NextFunction) => {
	const { cpf } = req.body;
	const cpfExist = bankOfBrazil.findCpf(cpf);

	if (cpfExist) {
		return res.status(403).json({
			ok: false,
			message: "CPF existente. Não é possível cadastrar!",
		} as IRespDefault);
	}

	next();
};

export default checkCpfToEquals;
