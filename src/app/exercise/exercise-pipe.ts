import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exercise',
  pure: false
})
export class ExercisePipe implements PipeTransform {

  transform(items: string[], test: string): string {
    return items.filter(item => item.startsWith(test)).join(',');
  }

}
