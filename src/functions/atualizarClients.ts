import { Request, Response } from "express";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function atualizarClients(req: Request, res: Response) {
	const { uid } = req.params;
	const { name, email, age } = req.body;
	const client = bankOfBrazil.allClients().find((cli) => cli.uid === uid);

	if (name) client!.name = name;
	if (email) client!.email = email;
	if (age) client!.age = age;

	return res.status(200).json({
		ok: true,
		message: "Usuário atualizado com sucesso!!",
		data: client,
	} as IRespDefault);
}
