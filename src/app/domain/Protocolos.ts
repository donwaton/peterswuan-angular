export interface Protocolo {
    proto_id: number;
    paciente_id: number;
    proto_name: string;
    proto_file: string;
    proto_url: string;
  }
  
  export interface Protocolos {
    err: string;
    mensaje: string;
    protocolos: Array<Protocolo>;
  }