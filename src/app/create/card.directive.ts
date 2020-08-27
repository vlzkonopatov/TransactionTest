import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appCardMask]',
})
export class CardDirective {

  constructor(public ngControl: NgControl) {
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }


  onInputChange(event) {
    let newVal = event.replace(/\D/g, '');

    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,4})/, '$1');
    } else if (newVal.length <= 8) {
      newVal = newVal.replace(/^(\d{0,4})(\d{0,4})/, '$1 $2');
    } else if (newVal.length <= 12) {
      newVal = newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3');
    } else if (newVal.length <= 16) {
      newVal = newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3 $4');
    } else {
      newVal = newVal.substring(0, 19);
      newVal = newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,3})/, '$1 $2 $3 $4 $5');
    }

    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
