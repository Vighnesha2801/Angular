import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value+"]";
  }

}
