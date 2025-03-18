import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenateLowercase'
})
export class HyphenateLowercasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}
