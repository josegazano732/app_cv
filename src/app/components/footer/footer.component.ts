import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-blue-900 text-white py-4 mt-12 no-print">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <p>© {{currentYear}} Jose Luis Gazano - QA Testing Professional</p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}