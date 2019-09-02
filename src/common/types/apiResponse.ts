export interface IDomainObject {
    Valor?: string,
    Descripcion?: string,
    CodigoID?: number,
    /**@type Date */
    FechaRegistro?: string,
    Id?: number,
    CodigoIdentificador?: number,
    UsuarioId?: number,
    OrganizacionId?: number,
    /**@value GUID */
    GuidDomain?: string,
    Error?: string,
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
