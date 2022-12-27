export default interface ITransactions {
	uid: string;
	title: string;
	value: number;
	type: "outcome" | "income";
}
