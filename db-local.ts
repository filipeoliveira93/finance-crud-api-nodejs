import { randomUUID } from 'node:crypto';

export class dbLocal {
  private _transaction: Map<string, string> = new Map();

  // list transacitons
  listTransactions() {
    return this._transaction.values;
  }

  addTransaction(transaction: string) {
    const transactionId = randomUUID();

    this._transaction.set(transactionId, transaction);
  }

  changeTransaction(transaction: string, transactionId: string) {
    this._transaction.set(transaction, transactionId);
  }

  deleteTransaction(transactionId: string) {
    this._transaction.delete(transactionId);
  }
}
