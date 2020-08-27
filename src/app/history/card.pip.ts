import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {
  transform(plainCreditCard: string): string {

    const text = plainCreditCard.split(' ');
    const visibleSectionstart = text.pop();
    const visibleSectionEnd = text.shift();
    const maskedSection = text.map(item => item.replace(/./g, '*')).join(' ');

    return `${visibleSectionstart} ${maskedSection} ${visibleSectionEnd}`;
  }
}
