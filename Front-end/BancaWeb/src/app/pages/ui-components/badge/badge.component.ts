import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

interface Payment {
  empresa: string;
  servicio: string;
  fecha: string;
  monto: number;
  estado: string;
  contrapartida: string;
  cuenta: string; 
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  payment: Payment = {
    empresa: '',
    servicio: '',
    fecha: '',
    monto: 0,
    estado: 'Pendiente',
    contrapartida: '',
    cuenta: '' // Inicializar la nueva propiedad
  };

  pagos = new MatTableDataSource<Payment>([
    {
      empresa: 'Universidad de las Fuerzas Armadas',
      servicio: 'Banca Web',
      fecha: '15/06/2024',
      monto: 1200,
      estado: 'Pagado',
      contrapartida: '123456',
      cuenta: '0601076543'
    },
    {
      empresa: 'Empresa Eléctrica',
      servicio: 'Banca Empresas',
      fecha: '22/06/2024',
      monto: 850,
      estado: 'Pendiente',
      contrapartida: '789012',
      cuenta: '1108723645'
    },
    {
      empresa: 'Agua Potable',
      servicio: 'Ventanilla',
      fecha: '24/06/2024',
      monto: 500,
      estado: 'Pagado',
      contrapartida: '345678',
      cuenta: '2205361970'
    }
  ]);

  displayedColumns: string[] = ['empresa', 'servicio', 'contrapartida', 'fecha', 'cuenta', 'monto', 'estado']; // Añadido 'cuenta'

  orders: any[] = [];

  constructor() {
    this.payment.fecha = this.formatDate(new Date()); // Establecer la fecha actual con formato
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().slice(-4);
    return `${day}/${month}/${year}`;
  }

  onSubmit() {
    this.pagos.data.push({ ...this.payment, estado: 'Pagado' });
    this.pagos._updateChangeSubscription(); // Refresh the table
    this.payment = {
      empresa: '',
      servicio: '',
      fecha: '',
      monto: 0,
      estado: 'Pendiente',
      contrapartida: '',
      cuenta: ''
    };
    this.payment.fecha = this.formatDate(new Date()); // Restablecer la fecha actual con formato
  }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      throw new Error('No se pueden usar múltiples archivos');
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.orders = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
