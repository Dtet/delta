export interface IFacultativo {
    [ key: string ] : string | number;
}

export interface IFacultativoList {
    [ key: string ] : string[] | number[];
}

export interface IFacultativoApiResponse {
    result: {
        data: {
          listado: IFacultativoList;
        };
      };
}

export interface DialogData {
  name: string;
}