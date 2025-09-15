import { Routes } from '@angular/router';
import { RolGuard } from './guards/rol.guard';
import { PrincipalComponent } from './principal/principal.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { LoginComponent } from './login/login.component';
import { AccesoDenegadoComponent } from './acceso-denegado/acceso-denegado.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component:PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  { path: 'productos', component:ListaProductosComponent },
  { path: 'producto/:id', component:DetalleProductoComponent, canActivate: [RolGuard], data: {rol: 'admin'} }
];
