import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gray-50">
      <div id="cv-content">
        <app-header></app-header>
        <main class="container mx-auto px-4 max-w-4xl py-8">
          <app-profile></app-profile>
          <app-experience></app-experience>
          <app-education></app-education>
          <app-skills></app-skills>
        </main>
      </div>
      <div class="no-print">
        <app-footer></app-footer>
        <app-download-button></app-download-button>
      </div>
    </div>
  `
})
export class AppComponent {}