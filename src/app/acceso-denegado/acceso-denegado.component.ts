import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-denegado',
  imports: [],
  templateUrl: './acceso-denegado.component.html',
  styleUrl: './acceso-denegado.component.scss'
})
export class AccesoDenegadoComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
 