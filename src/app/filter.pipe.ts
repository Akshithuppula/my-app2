import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(phone: any[], term: string): any[] {
    if (!phone) return [];
    if (!term) return phone;

    term = term.toLowerCase();

    return phone.filter(item => {
      // You can customize the properties you want to filter on here
      return (
        item.name.first.toLowerCase().includes(term) ||
        item.name.last.toLowerCase().includes(term) ||
        item.cell.includes(term)
      );
    });
  }
}


