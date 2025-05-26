import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  items = [];
  producto: Productos = {
    id : 0,
    codigo : '',
    nombre : '',
    descripcion : '',
    precio : 0,
    stock : 0,
    imagen : '',
    proveedores_id : 0,
    rubros_id : 0
  }

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/productos`);
  }

  getProducto(id: any): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/productos/${id}`);
  }

  guardarProducto(id: any, datos: Productos) {
    if(id > 0) {
      this.http.put(`${this.url}/productos/${id}`, datos)
      .subscribe(
        res => {console.log(res)},
        err => {console.error('Ocurrió un error')}
      )
    } else {
      this.http.post(`${this.url}/productos`, datos)
      .subscribe(
        res => {console.log(res)},
        err => {console.error('Ocurrió un error')}
      )
    }
  }

  eliminarProducto(id: any) {
    this.http.delete(`${this.url}/productos/${id}`)
    .subscribe(
        res => {console.log(res)},
        err => {console.error('Ocurrió un error')}
      )
  }
}
