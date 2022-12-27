import { Request, Response } from "express";
import Client from "../classes/Client";
import IClients from "../interfaces/IClients";
import bankOfBrazil from "../classes/Bank";
import IRespDefault from "../interfaces/IRespDefault";

export default function addClients(req: Request, res: Response) {
	const { name, email, cpf, age } = req.body;

	if (!name || !email || !cpf || !age) {
		return res.status(418).json({
			message: "Informe nome, cpf, email e idade",
		});
	}

	const client: IClients = new Client(name, cpf, email, age);

	bankOfBrazil.addNewClientToArray(client);

	return res.status(200).json({
		ok: true,
		message: "Usuário criado com sucesso!!",
		data: client,
	} as IRespDefault);
}
