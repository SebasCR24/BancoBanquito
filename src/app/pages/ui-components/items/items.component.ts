import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CobroService } from 'src/app/services/cobro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  servicio: any;
  ordenId: any;
  items:any;

  constructor(private route: ActivatedRoute, private cobroService:CobroService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.servicio = params['servicio'];
      this.ordenId = params['ordenId'];      

      if(this.servicio==2){
        this.cobroService.obtainItemCollection(this.ordenId).subscribe(
          response => {
            console.log('Se obtieron item collection', response);
            this.items= response;
          },
          error => {
            console.error('No se obtuvieron ordenes', error);
          }
        );
      }
      else{
        this.cobroService.obtainItemAutomaticCollection(this.ordenId).subscribe(
          response => {
            console.log('Se obtieron automatic collection', response);
            this.items= response;
          },
          error => {
            console.error('No se obtuvieron ordenes', error);
          }
        );
      }
    });
  }


  regresar(){
    this.router.navigate(['/ui-components/movimientos']);
  }
}
