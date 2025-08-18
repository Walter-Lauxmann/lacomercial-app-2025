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
    precio_costo : 0,
    precio_venta : 0,
    stock : 0,
    estado : 'disponible',
    imagen : '',
    proveedores_id : 1,
    rubros_id : 1
  }

  url = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}`);
  }

  getProducto(id: any): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}/${id}`);
  }

  guardarProducto(id: any, datos: any, archivo?: File, ): Observable<any> {
    console.log(datos);
    const formData = new FormData();
    Object.keys(datos).forEach(key => {
      formData.append(key, datos[key]);
    });
    if (archivo) {
      formData.append('archivo', archivo);
    }
    if(id > 0) {
      return this.http.put(`${this.url}/${id}`, formData);
    } else {
      return this.http.post(`${this.url}`, formData);
    }
  }

  eliminarProducto(id: any) {
    this.http.delete(`${this.url}/${id}`)
    .subscribe(
        res => {console.log(res)},
        err => {console.error('Ocurrió un error')}
      )
  }
}
