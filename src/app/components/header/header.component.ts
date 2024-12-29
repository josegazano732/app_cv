import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="flex items-start gap-8 mb-6">
          <!-- Profile Image -->
          <div class="flex-shrink-0">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="assets/profile-image.jpg"
                alt="Jose Luis Gazano"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Name and Title -->
          <div>
            <h1 class="text-4xl font-bold mb-2">JOSE LUIS GAZANO</h1>
            <h2 class="text-xl text-blue-100 mb-4">QA Testing</h2>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <!-- Screen version -->
          <div class="screen-only flex flex-wrap items-center gap-x-6 gap-y-2">
            <div class="flex items-center gap-2">
              <i-lucide name="map-pin" [size]="16"></i-lucide>
              <span>Apóstoles, Misiones</span>
            </div>
            <div class="flex items-center gap-2">
              <i-lucide name="phone" [size]="16"></i-lucide>
              <span>3758-540393</span>
            </div>
            <div class="flex items-center gap-2">
              <i-lucide name="mail" [size]="16"></i-lucide>
              <a href="mailto:josegazano7@outlook.com">josegazano7@outlook.com</a>
            </div>
            <div class="flex items-center gap-2">
              <i-lucide name="linkedin" [size]="16"></i-lucide>
              <a href="https://linkedin.com/in/joséluisgazano7/" target="_blank">linkedin.com/in/joséluisgazano7</a>
            </div>
            <div class="flex items-center gap-2">
              <i-lucide name="github" [size]="16"></i-lucide>
              <a href="https://github.com/josegazano732" target="_blank">github.com/josegazano732</a>
            </div>
          </div>

          <!-- Print version -->
          <div class="print-only space-y-1">
            <p><strong>Dirección:</strong> Apóstoles, Misiones</p>
            <p><strong>Teléfono:</strong> 3758-540393</p>
            <p><strong>Email:</strong> josegazano7@outlook.com</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/joséluisgazano7/</p>
            <p><strong>GitHub:</strong> github.com/josegazano732</p>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}