import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div class="grid md:grid-cols-2 gap-8">
      <section>
        <h2 class="text-2xl font-bold text-blue-900 mb-4">HABILIDADES TÉCNICAS</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold mb-2">Lenguajes y Tecnologías:</h3>
            <p class="text-gray-700">Html, Css, Javascript, Typescript, Angular 15, SQL, MYSQL, Spring-Boot.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Herramientas de Testing:</h3>
            <p class="text-gray-700">Postman, gestión de pruebas manuales.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Versionamiento:</h3>
            <p class="text-gray-700">Git, GitHub</p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Competencias adicionales:</h3>
            <p class="text-gray-700">Documentación de casos de uso, relevamiento de requerimientos, capacitación a usuarios finales.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-blue-900 mb-4">HABILIDADES BLANDAS</h2>
        <ul class="grid grid-cols-2 gap-3 text-gray-700">
          <li class="bg-blue-50 p-3 rounded-lg">Comunicación efectiva</li>
          <li class="bg-blue-50 p-3 rounded-lg">Trabajo en equipo</li>
          <li class="bg-blue-50 p-3 rounded-lg">Adaptabilidad</li>
          <li class="bg-blue-50 p-3 rounded-lg">Resiliencia</li>
          <li class="bg-blue-50 p-3 rounded-lg">Gestión del tiempo</li>
          <li class="bg-blue-50 p-3 rounded-lg">Manejo de la presión</li>
        </ul>
      </section>
    </div>
  `
})
export class SkillsComponent {}