export interface IDomainObject {
    Valor?: string;
    Descripcion?: string;
    CodigoID?: number;
    /**@type Date */
    FechaRegistro?: string;
    Id?: number;
    CodigoIdentificador?: number;
    UsuarioId?: number;
    OrganizacionId?: number;
    /**@value GUID */
    GuidDomain?: string;
    Error?: string;
    Eid?: number;
}

export interface IDataResponse {
    DomainObject?: IDomainObject;
    Url?: string;
}

export interface IApiResponse {
    Number?: number;
    Data?: IDataResponse[];
}

export interface IReportResponse {
    Id?: number;
    UsuarioId?: number;
    OrganizacionId?: number;
    NombreCompleto?: string;
    Edad?: number;
    Fecha?: string;
    IMC?: string;
    Peso?: string;
    Altura?: string;
    CriterioIMC?: string;
    ClasificacionSistolica?: string;
    ClasificacionDiastolica?: string;
    ResultadoScore?: string;
    Presiones?: IDomainObject[];
    CodigoIdentificador?: any;
    GuidDomain?: string;
    Error?: string;
    Eid?: any;
    PasosRealizados?: string;
    PasosMetas?: string;
}
