export interface datosUsuario {
  user_id: number;
  user_name: string;
  user_names: string;
  user_email: string;
  tipousuario_nombre: string;
}
export interface Usuarios {
    err: string;
    mensaje: string;
    usuarios: Array<datosUsuario>;
  }