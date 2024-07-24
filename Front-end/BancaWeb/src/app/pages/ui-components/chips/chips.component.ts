import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Transferencia {
  nombres: string;
  cedula: string;
  numeroContrato: string;
  monto: number;
  fechaInicio: string;
  fechaVencimiento: string;
  cuentaAcreditar: string;
  contrapartida: string;
  descripcion: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  transferenciaForm: FormGroup;
  transferencias = new MatTableDataSource<Transferencia>([]);
  displayedColumns: string[] = [
    'nombres',
    'cedula',
    'numeroContrato',
    'monto',
    'fechaInicio',
    'fechaVencimiento',
    'cuentaAcreditar',
    'contrapartida',
    'descripcion'
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.transferenciaForm = this.fb.group({
      nombres: ['', Validators.required],
      cedula: ['', Validators.required],
      numeroContrato: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      fechaInicio: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      cuentaAcreditar: ['', Validators.required],
      contrapartida: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.transferenciaForm.valid) {
      this.transferencias.data.push({ ...this.transferenciaForm.value });
      this.transferencias._updateChangeSubscription(); // Refresh the table
      this.transferenciaForm.reset();

      // Mostrar mensaje de confirmación
      this.snackBar.open('Recaudo procesado exitosamente', 'Cerrar', {
        duration: 3000, // Duración del snackbar en milisegundos
        verticalPosition: 'top', // Posición vertical
        horizontalPosition: 'center' // Posición horizontal
      });
    }
  }

  exportAllToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.transferencias.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Recaudos');
    XLSX.writeFile(wb, 'recaudos.xlsx');
  }

  exportAllToPDF() {
    const doc = new jsPDF();
    const col = ['Nombres', 'Cédula', 'Número de Contrato', 'Monto', 'Fecha de Inicio', 'Fecha de Vencimiento', 'Cuenta a Acreditar', 'Contrapartida', 'Descripción'];
    const rows: any[] = [];

    this.transferencias.data.forEach(transferencia => {
      const temp = [
        transferencia.nombres,
        transferencia.cedula,
        transferencia.numeroContrato,
        transferencia.monto,
        transferencia.fechaInicio,
        transferencia.fechaVencimiento,
        transferencia.cuentaAcreditar,
        transferencia.contrapartida,
        transferencia.descripcion
      ];
      rows.push(temp);
    });

    (doc as any).autoTable({
      head: [col],
      body: rows
    });
    doc.save('recaudos.pdf');
  }
}
