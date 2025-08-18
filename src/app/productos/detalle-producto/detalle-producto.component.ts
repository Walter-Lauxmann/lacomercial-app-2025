import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss',
})
export class DetalleProductoComponent implements OnInit {
  id: any;
  items: any;
  producto: any;
  productoForm: FormGroup;
  archivoSeleccionado: File | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
  ) {
    this.productoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: [''],
      precio_costo: [0, Validators.required],
      precio_venta: [0, Validators.required],
      stock: [0, Validators.required],
      estado: ['disponible'],
      imagen: [''],
      proveedores_id: [1],
      rubros_id: [1]
    });
  }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.obtenerProducto(this.id);
    } else {
      this.producto = this.productosService.producto;
    }
  }


  obtenerProducto(id: any): void {
    this.productosService.getProducto(id).subscribe(
      (res: any) => {
        //this.items = res;
        this.producto = res;
        //console.log(this.items);
        console.log(this.producto);
        this.productoForm.patchValue({
          codigo: this.producto.codigo,
          nombre: this.producto.nombre,
          descripcion: this.producto.descripcion,
          precio_costo: this.producto.precio_costo,
          precio_venta: this.producto.precio_venta,
          stock: this.producto.stock,
          estado: this.producto.estado,
          imagen: this.producto.imagen,
          proveedores_id: this.producto.proveedores_id,
          rubros_id: this.producto.rubros_id
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cuandoArchivoSeleccionado(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  // Guardar producto
  onSubmit(): void {
    if (this.productoForm.valid) {
      this.productosService.guardarProducto(
        this.id,
        this.productoForm.value,
        this.archivoSeleccionado
      ).subscribe({
        next: (res) => {
          alert('Producto creado correctamente');
          this.productoForm.reset();
          this.archivoSeleccionado = undefined;
        },
        error: (err) => {
          console.error(err);
          alert('Error al crear el producto');
        }
      });
    }
    this.router.navigate(['/']);
  }

  /*
  guardarProducto(id: any): void {
    const formData = new FormData();

    formData.append('codigo', this.producto.codigo);
    formData.append('nombre', this.producto.nombre);
    formData.append('precio_costo', this.producto.precio_costo);
    formData.append('precio_venta', this.producto.precio_venta);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('stock', this.producto.stock);
    formData.append('estado', this.producto.estado);
    formData.append('rubros_id', this.producto.rubros_id);
    formData.append('proveedores_id', this.producto.proveedores_id);

    if (this.archivoSeleccionado) {
      formData.append('imagen', this.archivoSeleccionado);
    }

    this.productosService.guardarProducto(id, formData);
    alert('Producto guardado!');
    this.router.navigate(['/']);
  }
  */


  // Eliminar producto
  eliminarProducto(id: any): void {
    let respuesta = confirm(`¿Desea eliminar a ${this.producto.nombre}?`);
    if (respuesta) {
      this.productosService.eliminarProducto(id);
      alert('Producto eliminado!');
      this.router.navigate(['/']);
    }
  }

}
