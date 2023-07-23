export interface SmsData {
    id: number;
    phoneNumber: string;
    message: string;
    envioExitoso?: boolean;
    mensajeRespuesta?: string; 
  }
  