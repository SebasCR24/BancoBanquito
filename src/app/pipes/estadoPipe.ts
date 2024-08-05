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
        } else if(value=== 'APR'){
          return 'Aprobado'
        } else if(value=== 'REC'){
          return 'Rechazado'
        }else if(value=== 'EXE'){
          return 'Exe'
        }else if(value=== 'DEB'){
          return 'Débito'
        }else if(value=== 'CRE'){
          return 'Crédito'
        }else if(value=== false){
          return 'No'
        }else if(value=== true){
          return 'SI'
        }else if(value=== 'TRANSFER'){
          return 'transferencia'
        }
      }
}

