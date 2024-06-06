import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceColor'
})
export class ServiceColorPipe implements PipeTransform {

  transform(type: string): string{
    let color: string;

    switch (type){

      case 'Feu':
        color='red lighten-1';
        break;
      default:
        color='grey'
        break;
    }
    return 'chip' + color;
  }

}
