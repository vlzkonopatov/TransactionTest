import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Perevod} from '../app.models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public submitStatus = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  createForm(form?: Perevod) {
    this.form = this.fb.group({
      cardNumber1:  [form && form.cardNumber1 ? form.cardNumber1 : '', [Validators.required, Validators.minLength(19), Validators.maxLength(23)]],
      cardNumber2:  [form && form.cardNumber2 ? form.cardNumber2 : '', [Validators.required, Validators.minLength(19), Validators.maxLength(23)]],
      cardPerson:   [form && form.cardPerson ? form.cardPerson : '', Validators.required],
      cardMonth:    [form && form.cardMonth ? form.cardMonth : '', Validators.required],
      cardYear:     [form && form.cardYear ? form.cardYear : '', Validators.required],
      sum:          [form && form.sum ? form.sum : '', Validators.required],
    });

    this.subscriptions.push(
      this.cardYear.valueChanges.subscribe((year) => {
        const currentDate = new Date();
        const month = this.cardMonth.value;
        if (parseInt(year) === currentDate.getFullYear()) {
          const isInvalid = !!month ? !(parseInt(month) >= currentDate.getMonth()) : false;
          if (isInvalid) {
            this.cardYear.setErrors({invalid: isInvalid});
          } else {
            this.cardYear.setErrors(null);
            this.cardMonth.setErrors(null);
          }
        } else {
          this.cardYear.setErrors(null);
          this.cardMonth.setErrors(null);
        }
      }),
      this.cardMonth.valueChanges.subscribe((month) => {
        const currentDate = new Date();
        const year = this.cardYear.value;
        if ( parseInt(year) === currentDate.getFullYear()) {
          const isInvalid = !!month ? !(parseInt(month) >= currentDate.getMonth()) : false;
          if (isInvalid) {
            this.cardMonth.setErrors({invalid: isInvalid});
          } else {
            this.cardMonth.setErrors(null);
            this.cardYear.setErrors(null);
          }
        } else {
          this.cardMonth.setErrors(null);
          this.cardYear.setErrors(null);        }
      })

    );


  }

  onSubmit = (form: FormGroup) => {
    this.submitStatus = true;
    console.log(form.value);
  };

  generateValue = (type?: string) => {
    if (!type) {
      return new Array(12);
    } else if (type === 'years') {
      const currentYears = new Date().getFullYear();
      const array = [];
      for (let i = 0; i < 5; i++) {
        array.push(currentYears + i);
      }
      return array;
    }
  };

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


  get cardNumber1() {
    return this.form.get('cardNumber1') as FormControl;
  }

  get cardNumber2() {
    return this.form.get('cardNumber2') as FormControl;
  }

  get cardPerson() {
    return this.form.get('cardPerson') as FormControl;
  }

  get cardMonth() {
    return this.form.get('cardMonth') as FormControl;
  }

  get cardYear() {
    return this.form.get('cardYear') as FormControl;
  }

  get sum() {
    return this.form.get('sum') as FormControl;
  }

}
