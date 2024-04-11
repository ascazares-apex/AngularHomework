import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizedVersion'
})
export class CapitalizedVersionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const word: string = (value as string).toLowerCase();
    return word[0].toUpperCase() + word.substring(1);
  }

}
