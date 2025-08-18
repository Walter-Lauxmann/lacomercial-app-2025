import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit {
  title = 'La Comercial';
  productos: any;

  nombre = "";
  correo = "";
  mensaje = "";

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos()
    .subscribe(
      (res: any) => { this.productos = res.slice(0,5); },
      (error) => { console.error(error); }
    );
  }

  enviarFormulario(event: Event) {
    event.preventDefault();
    console.log("Formulario enviado", { nombre: this.nombre, correo: this.correo, mensaje: this.mensaje });
  }

}
