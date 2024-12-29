import { Injectable } from '@angular/core';
// @ts-ignore
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  generatePdf() {
    const element = document.getElementById('cv-content');
    if (!element) return;
    
    const options = {
      margin: [10, 10], // Increased margins for better readability
      filename: 'CV-JoseLuisGazano.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 3,
        useCORS: true,
        letterRendering: true,
        scrollY: -window.scrollY, // Fix content positioning
        windowWidth: element.scrollWidth,
        ignoreElements: (element: HTMLElement) => {
          return element.classList.contains('no-print');
        }
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4',
        orientation: 'portrait',
        compress: false,
        putOnlyUsedFonts: true,
        floatPrecision: 16 // Better text positioning
      },
      pagebreak: { 
        //mode: ['avoid-all', 'css', 'legacy'],
        //before: '.page-break-before',
        //after: '.page-break-after',
        //avoid: ['section', 'h2', 'h3', '.avoid-break']
      }
    };

    html2pdf().set(options).from(element).save();
  }
}