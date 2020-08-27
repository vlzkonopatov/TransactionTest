import { Injectable } from '@angular/core';
import {Transaction} from './app.models';

@Injectable()
export class AppService {

  //TODO можно было бы использовать Subject от RXjs Но пока что это не целесообразно
  public transactionSubject: Transaction[] = [];


  constructor() {
    this.init();
  }

  public setTransactionSubject = (form: Transaction) => {
    this.transactionSubject.push(form);
    localStorage.setItem('transaction', JSON.stringify(this.transactionSubject));
  };

  public updateTransactionSubject = (transaction: Transaction[]) => {
    this.transactionSubject = transaction;
    localStorage.setItem('transaction', JSON.stringify(this.transactionSubject));
  };

  public getTransactionSubject = (): Transaction[] => {
    return this.transactionSubject;
  };


  private init() {
    const getHistory = localStorage.getItem('transaction');
    if (getHistory) {
      this.transactionSubject = JSON.parse(getHistory);
    }

  }


}
