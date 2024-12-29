import { Component } from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-download-button',
  template: `
    <button 
      (click)="downloadPdf()"
      class="fixed bottom-8 right-8 bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2 z-50">
      <i-lucide name="download" [size]="20"></i-lucide>
      <span>Descargar CV</span>
    </button>
  `
})
export class DownloadButtonComponent {
  constructor(private pdfService: PdfService) {}

  downloadPdf() {
    this.pdfService.generatePdf();
  }
}