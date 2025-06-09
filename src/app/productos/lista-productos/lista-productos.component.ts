import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lista-productos',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent implements OnInit {
  productos: any;

  constructor(private productoService:ProductosService) {}

  ngOnInit(): void {
      this.productoService.getProductos()
      .subscribe(
        (res:any) => {this.productos = res;},
        (error) => {console.error(error); }
      );
  }

}
