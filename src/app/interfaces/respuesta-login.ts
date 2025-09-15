export interface RespuestaLogin {
  token: string;
  usuario: Usuario;
}

export interface Usuario {
  id: number;
  usuario: string;
  rol: string;
}
