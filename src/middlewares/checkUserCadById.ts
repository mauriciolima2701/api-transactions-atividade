import { NextFunction, Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

const checkUserCadById = (req: Request, res: Response, next: NextFunction) => {
	const { userId } = req.params;

	const verifyIdregister = bankOfBrazil.verifyId(userId);

	if (!verifyIdregister) {
		return res.status(403).json({
			ok: false,
			message: "Usuário não encontrado!!",
		} as IRespDefault);
	}

	next();
};

export default checkUserCadById;
