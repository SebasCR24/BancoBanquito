import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
 name: 'rol'
})
export class RolPipe implements PipeTransform {


    transform(value: any): any {
        
        if(value=== 'OPE'){
          return 'Operador'
        }else if(value=== 'APR'){
          return 'Aprobador'
        } if(value=== 'ADM'){
          return 'Administrador'
        }

      }
}

