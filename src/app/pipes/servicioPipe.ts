import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
 name: 'servicee'
})
export class ServiceePipe implements PipeTransform {


    transform(value: any): string {
        // Verifica el valor y retorna el texto correspondiente
        if (value === 'JXM0025321') {
          return 'Cobros';
        } else {
          return 'Recaudos';
        }
      }
}

