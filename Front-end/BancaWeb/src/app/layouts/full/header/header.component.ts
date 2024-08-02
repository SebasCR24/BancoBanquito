import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  empresa:any;

  showFiller = false;

  constructor(public dialog: MatDialog) {
    const empresa2 = localStorage.getItem('empresa');

    if (empresa2) {
      // Solo realiza JSON.parse si empresa2 no es null
      this.empresa = JSON.parse(empresa2);
      console.log('Empresa:', this.empresa);
    } else {
      console.log('No se encontró el valor para la clave "empresa" en localStorage.');
      this.empresa = null; // O asigna un valor predeterminado según sea necesario
    }

  }
}
