export interface Productos {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio_costo: number;
  precio_venta: number;
  stock: number;
  estado: string,
  imagen: string;
  proveedores_id: number;
  rubros_id: number
}
