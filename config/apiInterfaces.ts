// Generated by https://quicktype.io

export interface TopUser {
  total: number;
  usuarios: ApiUsuario[];
}

export interface GetUserByIP {
  usuario: ApiUsuario;
}

export interface ApiUsuario {
  nombre: string;
  puntaje: string;
  uid: string;
}



