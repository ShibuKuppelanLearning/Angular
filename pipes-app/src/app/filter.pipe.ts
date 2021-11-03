import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: { name: string, instanceType: string, creationDate: Date, status: string }[], filterString: string, propName: string): { name: string, instanceType: string, creationDate: Date, status: string }[] {
    if (value.length === 0) {
      return value;
    }
    return value.filter(server => {
      return server[propName as keyof { name: string, instanceType: string, creationDate: Date, status: string }].toString().startsWith(filterString);
    });
  }
}
