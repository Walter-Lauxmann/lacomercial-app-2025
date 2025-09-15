import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const rolEsperado = route.data['rol'];
    const rol = this.auth.getRol();

    if (rol !== rolEsperado) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
