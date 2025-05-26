export interface Productos {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  proveedores_id: number;
  rubros_id: number
}
