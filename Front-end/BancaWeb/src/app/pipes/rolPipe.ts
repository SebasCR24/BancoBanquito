import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
 name: 'rol'
})
export class RolPipe implements PipeTransform {


    transform(value: any): any {
        
        if(value=== 'ADM'){
          return 'Operador'
        }else if(value=== 'APR'){
          return 'Aprobador'
        }

      }
}

