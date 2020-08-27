import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Transaction } from '../app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public transactions: Transaction[];

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.transactions = this.appService.getTransactionSubject();
  }

  public repiteTransaction = (index: number) => {
    const transaction = this.transactions[index];
    this.router.navigate(['create'], { state: { transaction } });

  };

  public removeItem = (index: number) => {
    this.transactions.splice(index, 1);
    this.appService.updateTransactionSubject(this.transactions);
  };

}
