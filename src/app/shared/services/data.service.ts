import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }
  private selectUrl = '/COMPAS/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  

  
  // getInfo(): Observable<any> {
  //   return this.http.get(this.selectUrl)
  //     .pipe(
  //       map((response: any) => response
  //         .map((data: any) => data['Serie'])))
  // }

  private selectCedenteBody = {
    trigger:"filterBeneficiarioPorTipo",
    P_FILTRO:"null",
    P_TIPO_BENEFICIARIO:12,
    P_AGREGAR:"0"
  }
  private selectCorredorBody = {
    trigger:"filterBeneficiarioPorTipo",
    P_FILTRO:"null",
    P_TIPO_BENEFICIARIO:14,
    P_AGREGAR:"0"
  }

  private selectAseguradoBody = {
    trigger:"filterBeneficiarioPorTipo",
    P_FILTRO:"null",
    P_TIPO_BENEFICIARIO:10,
    P_AGREGAR:"0"
  }

  private selectDomiciliosBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS:["domicilios_parametrizacion"]
  }

  private selectMonedasBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["monedas_plain"]
  }

  private selectGrupoRamoBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["gruposRamo"], 
    tpGramo: "A"
  }

  private selectRamosBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["ramos"]
  }

  private selectNegocioBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["tpNegocioFacultativo"]
  }

  private selectContratoBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["tpContrato"]
  }

  private selectIndoleBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["indoles"]
  }

  private selectEstadoFacultativoBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["stFacultativo"]
  }

  private selectUsuarioRegistroBody = {
    trigger: "getFlujoCajaReingeneiriaFilter",
    P_LIST_FILTROS: ["usuarios_registrar_facultativo"]
  }


  getCedente() {
    return this.http.post(this.selectUrl, this.selectCedenteBody, this.httpOptions)
  }

  getCorredor() {
    return this.http.post(this.selectUrl, this.selectCorredorBody, this.httpOptions)
  }
  
  getAsegurado() {
    return this.http.post(this.selectUrl, this.selectAseguradoBody, this.httpOptions)
  }

  getDomicilios() {
    return this.http.post(this.selectUrl, this.selectDomiciliosBody, this.httpOptions)
  }

  getMonedas() {
    return this.http.post(this.selectUrl, this.selectMonedasBody, this.httpOptions)
  }

  getGrupoRamo() {
    return this.http.post(this.selectUrl, this.selectGrupoRamoBody, this.httpOptions)
  }

  getRamos() {
    return this.http.post(this.selectUrl, this.selectRamosBody, this.httpOptions)
  }

  getNegocio() {
    return this.http.post(this.selectUrl, this.selectNegocioBody, this.httpOptions)
  }

  getContrato() {
    return this.http.post(this.selectUrl, this.selectContratoBody, this.httpOptions)
  }

  getIndole() {
    return this.http.post(this.selectUrl, this.selectIndoleBody, this.httpOptions)
  }

  getEstadoFacultativo() {
    return this.http.post(this.selectUrl, this.selectEstadoFacultativoBody, this.httpOptions)
  }

  getUsuarioRegistro() {
    return this.http.post(this.selectUrl, this.selectUsuarioRegistroBody, this.httpOptions)
  }
} 
