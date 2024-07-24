import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { MatSnackBar } from '@angular/material/snack-bar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  payment: any = {
    empresa: '',
    referencia: '',
    cuentaAcreditar: '',
    fechaInicio: '',
    fechaVencimiento: '',
    frecuenciaCobro: ''
  };

  cobros: any[] = [];
  orders: any[] = [];
  fileLoaded: boolean = false;

  // Agregar todas las columnas necesarias
  displayedColumns: string[] = [
    'empresa',
    'referencia',
    'nombresDelCliente',
    'tipoDeIdentificacion',
    'identificacion',
    'cuentaDelCliente',
    'monto',
    'fechaDeInicio',
    'fechaDeVencimiento',
    'cuentaAcreditar',
    'tipo',
    'frecuencia',
    'cancelado',
    'acciones'
  ];

  constructor(private snackBar: MatSnackBar) {}

  onSubmit() {
    this.cobros.push({ ...this.payment });
    this.payment = {
      empresa: '',
      referencia: '',
      cuentaAcreditar: '',
      fechaInicio: '',
      fechaVencimiento: '',
      frecuenciaCobro: ''
    };
    this.fileLoaded = false; // Reset fileLoaded after submitting

    // Mostrar mensaje de confirmación
    this.snackBar.open('Cobro realizado de manera exitosa', 'Cerrar', {
      duration: 3000, // Duración del snackbar en milisegundos
      verticalPosition: 'top', // Posición vertical
      horizontalPosition: 'center' // Posición horizontal
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(fileReader.result as ArrayBuffer);
        const arr = Array.from(data, x => String.fromCharCode(x)).join("");
        const workbook = XLSX.read(arr, { type: "binary" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        this.processData(jsonData);
        this.fileLoaded = true; // Set fileLoaded to true after processing the file
      };
      fileReader.readAsArrayBuffer(file);
    }
  }

  processData(data: any) {
    // Asumiendo que la primera fila contiene los encabezados
    const headers = data[0];
    const rows = data.slice(1);
    rows.forEach((row: any) => {
      const cobro: any = {};
      headers.forEach((header: string, index: number) => {
        cobro[header.toLowerCase()] = row[index];
      });
      this.cobros.push(cobro);
    });
  }

  cancelFile(fileInput: HTMLInputElement) {
    this.fileLoaded = false;
    this.orders = [];
    fileInput.value = ''; // Reset the file input
  }

  processFile(fileInput: HTMLInputElement) {
    this.fileLoaded = false;
    this.orders = [];
    fileInput.value = ''; // Reset the file input

    this.snackBar.open('Cobro realizado de manera exitosa', 'Cerrar', {
      duration: 3000, // Duración del snackbar en milisegundos
      verticalPosition: 'top', // Posición vertical
      horizontalPosition: 'center' // Posición horizontal
    });
  }

  exportAllToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cobros);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cobros');
    XLSX.writeFile(wb, 'cobros.xlsx');
  }

  exportToExcel(cobro: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([cobro]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cobro');
    XLSX.writeFile(wb, 'cobro.xlsx');
  }

  exportAllToPDF() {
    const doc = new jsPDF();
    const col = ['Referencia', 'Nombres del Cliente', 'Tipo de Identificación', 'Identificación', 'Cuenta del Cliente', 'Monto', 'Fecha de Inicio', 'Fecha de Vencimiento', 'Cuenta a Acreditar', 'Tipo', 'Frecuencia', 'Cancelado'];
    const rows: any[] = [];

    this.cobros.forEach(cobro => {
      const temp = [
        cobro.empresa,
        cobro.referencia, 
        cobro.nombresDelCliente, 
        cobro.tipoDeIdentificacion, 
        cobro.identificacion, 
        cobro.cuentaDelCliente, 
        cobro.monto, 
        cobro.fechaDeInicio, 
        cobro.fechaDeVencimiento, 
        cobro.cuentaAcreditar, 
        cobro.tipo, 
        cobro.frecuencia, 
        cobro.cancelado ? 'Sí' : 'No'
      ];
      rows.push(temp);
    });

    (doc as any).autoTable({
      head: [col],
      body: rows
    });
    doc.save('cobros.pdf');
  }

  exportToPDF(cobro: any) {
    const doc = new jsPDF();
    const col = ['Referencia', 'Nombres del Cliente', 'Tipo de Identificación', 'Identificación', 'Cuenta del Cliente', 'Monto', 'Fecha de Inicio', 'Fecha de Vencimiento', 'Cuenta a Acreditar', 'Tipo', 'Frecuencia', 'Cancelado'];
    const rows: any[] = [[
      cobro.empresa,
      cobro.referencia, 
      cobro.nombresDelCliente, 
      cobro.tipoDeIdentificacion, 
      cobro.identificacion, 
      cobro.cuentaDelCliente, 
      cobro.monto, 
      cobro.fechaDeInicio, 
      cobro.fechaDeVencimiento, 
      cobro.cuentaAcreditar, 
      cobro.tipo, 
      cobro.frecuencia, 
      cobro.cancelado ? 'Sí' : 'No'
    ]];

    (doc as any).autoTable({
      head: [col],
      body: rows
    });
    doc.save('cobro.pdf');
  }
}
