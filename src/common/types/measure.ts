import { IUser } from "./user";
import { ICode } from "./code";

export interface IMeasure {
    medidaId: number;
    valor: number;
    codigo: ICode;
    usuario: IUser;
    fechaRegistro: string;
}
