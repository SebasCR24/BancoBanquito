import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
 name: 'estado'
})
export class EstadoPipe implements PipeTransform {


    transform(value: any): any {
        // Verifica el valor y retorna el texto correspondiente
        if (value === 'PEN') {
          return 'Pendiente';
        } else if(value=== 'EXP'){
          return 'Expirado';
        } else if(value=== 'ACT'){
          return 'Activo'
        }
      }
}

