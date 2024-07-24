import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { MatTableDataSource } from '@angular/material/table';

interface Cobro {
  empresa: string;
  referencia: string;
  nombresDelCliente: string;
  tipoDeIdentificacion: string;
  identificacion: string;
  cuentaDelCliente: string;
  monto: number;
  fechaInicio: string; // Use 'fechaInicio' to match the form control name
  fechaVencimiento: string; // Use 'fechaVencimiento' to match the form control name
  cuentaAcreditar: string;
  tipo: string;
  frecuenciaCobro: string; // Use 'frecuenciaCobro' to match the form control name
  cancelado: boolean;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  cobroForm: FormGroup;
  cobros = new MatTableDataSource<Cobro>([]);
  fileLoaded: boolean = false;
  displayedColumns: string[] = [
    'empresa',
    'referencia',
    'nombresDelCliente',
    'tipoDeIdentificacion',
    'identificacion',
    'cuentaDelCliente',
    'monto',
    'fechaInicio',
    'fechaVencimiento',
    'cuentaAcreditar',
    'tipo',
    'frecuenciaCobro',
    'cancelado'
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.cobroForm = this.fb.group({
      empresa: ['', Validators.required],
      referencia: ['', [Validators.required, Validators.maxLength(20)]],
      cuentaAcreditar: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      frecuenciaCobro: ['', Validators.required],
      nombresDelCliente: [''],
      tipoDeIdentificacion: [''],
      identificacion: [''],
      cuentaDelCliente: [''],
      monto: [''],
      cancelado: [false]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.cobroForm.valid) {
      this.cobros.data.push({ ...this.cobroForm.value });
      this.cobros._updateChangeSubscription(); // Refresh the table
      this.cobroForm.reset();
      this.fileLoaded = false; // Reset fileLoaded after submitting

      this.snackBar.open('Cobro realizado de manera exitosa', 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
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
    const headers = data[0];
    const rows = data.slice(1);
    rows.forEach((row: any) => {
      const cobro: any = {};
      headers.forEach((header: string, index: number) => {
        cobro[header.toLowerCase()] = row[index];
      });
      this.cobros.data.push(cobro);
    });
    this.cobros._updateChangeSubscription();
  }

  cancelFile(fileInput: HTMLInputElement) {
    this.fileLoaded = false;
    this.cobros.data = [];
    fileInput.value = ''; // Reset the file input
  }

  processFile(fileInput: HTMLInputElement) {
    this.onSubmit(); // Call onSubmit to save the form data
    fileInput.value = ''; // Reset the file input
    this.snackBar.open('Archivo procesado y cobro realizado de manera exitosa', 'Cerrar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  exportAllToExcel() {
    const dataToExport = this.cobros.data.map(cobro => {
      return {
        Empresa: cobro.empresa,
        Referencia: cobro.referencia,
        'Nombres del Cliente': cobro.nombresDelCliente,
        'Tipo de Identificación': cobro.tipoDeIdentificacion,
        Identificación: cobro.identificacion,
        'Cuenta del Cliente': cobro.cuentaDelCliente,
        Monto: cobro.monto,
        'Fecha de Inicio': cobro.fechaInicio,
        'Fecha de Vencimiento': cobro.fechaVencimiento,
        'Cuenta a Acreditar': cobro.cuentaAcreditar,
        Tipo: cobro.tipo,
        Frecuencia: cobro.frecuenciaCobro,
        Cancelado: cobro.cancelado ? 'Sí' : 'No'
      };
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cobros');
    XLSX.writeFile(wb, 'cobros.xlsx');
  }

  exportAllToPDF() {
    const doc = new jsPDF();
    const col = ['Empresa', 'Referencia', 'Nombres del Cliente', 'Tipo de Identificación', 'Identificación', 'Cuenta del Cliente', 'Monto', 'Fecha de Inicio', 'Fecha de Vencimiento', 'Cuenta a Acreditar', 'Tipo', 'Frecuencia', 'Cancelado'];
    const rows: any[] = [];

    this.cobros.data.forEach(cobro => {
      const temp = [
        cobro.empresa,
        cobro.referencia,
        cobro.nombresDelCliente,
        cobro.tipoDeIdentificacion,
        cobro.identificacion,
        cobro.cuentaDelCliente,
        cobro.monto,
        cobro.fechaInicio,
        cobro.fechaVencimiento,
        cobro.cuentaAcreditar,
        cobro.tipo,
        cobro.frecuenciaCobro,
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
}
