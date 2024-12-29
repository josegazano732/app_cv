import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-blue-900 mb-4">EXPERIENCIA LABORAL</h2>
      
      <div class="mb-8">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold">QA Tester y Capacitador</h3>
          <span class="text-gray-600">2022 – Presente</span>
        </div>
        <h4 class="text-lg text-blue-800 mb-2">HREÑUK S.A.</h4>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Desarrollo y ejecución de planes de pruebas funcionales para SIAC, un Sistema Integral Administrativo Contable en desarrollo.</li>
          <li>Relevamiento de sectores y toma de requerimientos para documentar casos de uso y nuevas funcionalidades.</li>
          <li>Capacitación a usuarios finales sobre nuevas implementaciones y configuraciones del sistema.</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold">Ventas y Administración</h3>
          <span class="text-gray-600">2016 – 2022</span>
        </div>
        <h4 class="text-lg text-blue-800 mb-2">Previsora del Paraná</h4>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Logro de objetivos de ventas individuales y en equipo, enfocado en una atención al cliente de calidad.</li>
          <li>Gestión de posventa, control de stock y tareas administrativas, como arqueos de caja y carga de comprobantes.</li>
          <li>Soporte en sucursales de Misiones y Corrientes, cubriendo períodos vacacionales.</li>
        </ul>
      </div>
    </section>
  `
})
export class ExperienceComponent {}