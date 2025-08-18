import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';

export const routes: Routes = [
  {path: '', component:PrincipalComponent},
  {path: 'productos', component:ListaProductosComponent},
  {path: 'producto/:id', component:DetalleProductoComponent}
];
