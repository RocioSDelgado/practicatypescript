import { Direccion } from './ClaseDireccion';
import { Telefono } from './ClaseTelefono';
import { Mail } from './ClaseMail';


export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumpleanos: Date;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Direccion[];
  private _mails: Mail[];
  private _telefonos: Telefono[];
  private _notas: any;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas:any) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  get nombre() {
    return this._nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  get edad() {
    return this._edad;
  }

  get dni() {
    return this._dni;
  }

  get cumpleanos() {
    return this._cumpleanos;
  }

  get colorFavorito() {
    return this._colorFavorito;
  }

  get sexo() {
    return this._sexo;
  }

  get direcciones() {
    return this._direcciones;
  }

  get mails() {
    return this._mails;
  }

  get telefonos() {
    return this._telefonos;
  }

  get notas() {
    return this._notas;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  set edad(edad: number) {
    this._edad = edad;
  }

  set dni(dni: string) {
    this._dni = dni;
  }

  set cumpleanos(cumpleanos: Date) {
    this._cumpleanos = cumpleanos;
  }

  set colorFavorito(colorFavorito: string) {
    this._colorFavorito = colorFavorito;
  }

  set sexo(sexo: string) {
    this._sexo = sexo;
  }

  set direcciones(direcciones: Direccion[]) {
    this._direcciones = direcciones;
  }

  set mails(mails: Mail[]) {
    this._mails = mails;
  }

  set telefonos(telefonos: Telefono[]) {
    this._telefonos = telefonos;
  }

  set notas(notas: any) {
    this._notas = notas;
  }

  agregarNuevaDireccion(direccion:Direccion) {
    this._direcciones.push(direccion)
  }

  agregarNuevoTelefono(telefono:Telefono) {
    this._telefonos.push(telefono)
  }

  agregarNuevoMail(mail:Mail) {
    this._mails.push(mail)
  }
}