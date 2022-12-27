import { Router, Response, Request } from "express";
import addClients from "../functions/addClients";
import atualizarClients from "../functions/atualizarClients";
import deletarClients from "../functions/deletarClientes";
import listarClients from "../functions/listarClients";
import listarClientsById from "../functions/listarClientsById";

import addTransactions from "../functions/addTransactions";
import atualizarTransaction from "../functions/atualizartransaction";
import listarTransactions from "../functions/listarTransactions";
import listarTransactionsById from "../functions/listarTransactionsById";
import deletarTransaction from "../functions/deletarTransaction";

import checkCpfToEquals from "../middlewares/checkCpfToEquals";
import checkTransactions from "../middlewares/checkTransactions";
import checkUserCadById from "../middlewares/checkUserCadById";

const router = Router();

// Add user
router.post("/users", checkCpfToEquals, (req: Request, res: Response) => {
	addClients(req, res);
});

// Listar todos os users
router.get("/users", (req: Request, res: Response) => {
	listarClients(req, res);
});

// Listar um user especifico
router.get("/users/:uid", checkUserCadById, (req: Request, res: Response) => {
	listarClientsById(req, res);
});

// Atualizar um user especifico
router.put("/users/:uid", checkUserCadById, (req: Request, res: Response) => {
	atualizarClients(req, res);
});

// Deletar um user
router.delete(
	"/users/:uid",
	checkUserCadById,
	(req: Request, res: Response) => {
		deletarClients(req, res);
	}
);

// --------- Transactions --------

// Cadastrar uma transação
router.post(
	"/user/:userId/transactions",
	checkTransactions,
	(req: Request, res: Response) => {
		addTransactions(req, res);
	}
);

// Listar uma transação específica
router.get("/user/:userId/transactions/:id", (req: Request, res: Response) => {
	listarTransactionsById(req, res);
});

// Listar (e somar) todas as transações de um determinado user
router.get(
	"/user/:userId/transactions/",
	checkUserCadById,
	(req: Request, res: Response) => {
		listarTransactions(req, res);
	}
);

// Atualizar uma transação
router.put(
	"/user/:userId/transactions/:id",
	checkTransactions,
	(req: Request, res: Response) => {
		atualizarTransaction(req, res);
	}
);

// Deletar transactions
router.delete(
	"/user/:userId/transactions/:id",
	checkUserCadById,
	(req: Request, res: Response) => {
		deletarTransaction(req, res);
	}
);

export default router;
