import { randomUUID } from 'node:crypto';

interface Transaction {
  name: string;
  value: number;
  type: string;
  category: string;
}

export class dbLocal {
  private _transaction: Map<string, Transaction> = new Map();

  // list transacitons
  listTransactions(search?: string) {

    return Array.from(this._transaction.entries()).map((transactionArray) => {
        const id = transactionArray[0]
        const data =  transactionArray[1]
        
        return {
          id,
          ...data,
        }   
    }
  ).filter(transaction =>{
    if (search) {
      return transaction.name.includes(search)
    }

    return true
  })

}

  addTransaction(transaction: Transaction) {
    const transactionId = randomUUID();

    this._transaction.set(transactionId, transaction);
  }

  changeTransaction( transactionId: string, transaction: Transaction,) {
    this._transaction.set(transactionId, transaction);
  }

  deleteTransaction(transactionId: string) {
    this._transaction.delete(transactionId);
  }
}
