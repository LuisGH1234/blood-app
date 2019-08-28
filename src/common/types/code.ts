import { IMasterCode } from "./master_code";

export interface ICode {
    codigoId: number;
    descripcion: string;
    activo: boolean;
    maestro: IMasterCode;
}
