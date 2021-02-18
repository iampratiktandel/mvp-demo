import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string): string {
    let arr = value.split(' ');
    let first = arr[0][0];
    let last = arr[1][0];
    return `${first}. ${last}`;
  }

}
