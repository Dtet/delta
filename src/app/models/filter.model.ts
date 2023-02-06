export interface IFiltro {
  Facultativo: Number;
  Serie: Number;
  Exp: Number;
  Fe_Registro: Date;
  Domicilio: String;
  Moneda: Number;
  Ramo: String;
  Indole: String;
  Negocio: String;
  Cedente: String;
  AseguradoAfianzado: String;
  Suscriptor: String;
  Vigdesde: Date;
  Vighasta: Date;
  Estado: String;
  Nuevo: Boolean;
  Usuario: String;
  Poliza: String;
}

export interface IRadioQuestionOption {
  key?: string;
  label?: string;
  order?: number;
  option?: { key: string; value: string }[];
}

export interface IDropdownQuestionOptions {
  key?: string;
  label?: string;
  options?: { key: string; value: string }[];
  order?: number;
}

export interface ITextboxQuestionOptions {
  key?: string;
  label?: string;
  order?: number;
  type?: string;
  required?: boolean;
  value?: string;
}
