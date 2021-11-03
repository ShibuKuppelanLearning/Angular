import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: { name: string, instanceType: string, creationDate: Date, status: string }[], filterString: string): { name: string, instanceType: string, creationDate: Date, status: string }[] {
    if (value.length === 0) {
      return value;
    }
    return value.filter(server => {
      return server.status.startsWith(filterString);
    });
  }
}
