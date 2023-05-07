import { Persona } from './ClasePersona';
import { Direccion } from './ClaseDireccion';
import { Mail } from './ClaseMail';
import { Telefono } from './ClaseTelefono';

let primeraResidenciaRocio = new Direccion(
  "Outid de Arriba",
  15,
  2,
  "D",
  43519,
  "El Perelló",
  "Tarragona"
)

let segundaResidenciaRocio = new Direccion(
  "Paseo del Atlántico",
  94,
  6,
  "C",
  18120,
  "Alhama De Granada",
  "Granada"
)

let mailRocio = new Mail(
  "personal",
  "Rocioemail@gmail.com"
)

let telefonoFijoRocio = new Telefono(
  "fijo",
  972325254
)

let telefonoMovilRocio = new Telefono(
  "movil",
  696232325
)

let datosRocio = new Persona(
  'Rocio',
  'Corral Segundo',
  26,
  '49567897S',
  new Date(1997, 4, 13),
  'Amarillo',
  'mujer',
  [primeraResidenciaRocio, segundaResidenciaRocio],
  [mailRocio],
  [telefonoFijoRocio, telefonoMovilRocio],
  "Estudia en la población de la segunda residencia"
);

let primeraResidenciaAdrian = new Direccion(
  "Travesía Nerea",
  26,
  3,
  "B",
  11945,
  "La Lomeli",
  "Segovia"
)

let segundaResidenciaAdrian = new Direccion(
  "Praza Garrido",
  41,
  8,
  "A",
  74313,
  "Lebrón de San Pedro",
  "Sevilla"
)

let mailPersonalAdrian = new Mail(
  "personal",
  "AdrianUrbina@hotmail.com"
)

let mailTrabajoAdrian = new Mail(
  "personal",
  "AdriantrabajoMK@outlook.es"
)

let telefonoFijoAdrian = new Telefono(
  "fijo",
  968397854
)

let telefonoMovilAdrianPersonal = new Telefono(
  "movil",
  663555709
)

let telefonoMovilAdrianTrabajo = new Telefono(
  "movil",
  645635800
)

let datosAdrian = new Persona(
  'Adrian',
  'Urbina Delgado',
  34,
  '55082914F',
  new Date(1985, 5, 27),
  'Rojo',
  'hombre',
  [primeraResidenciaAdrian, segundaResidenciaAdrian],
  [mailPersonalAdrian, mailTrabajoAdrian],
  [telefonoFijoAdrian, telefonoMovilAdrianPersonal, telefonoMovilAdrianTrabajo],
  "Sus hermanos viven en la segunda residencia"
);

let primeraResidenciaLisa = new Direccion(
  "Plaza Marco",
  30,
  1,
  "A",
  95088,
  "San Martí de la Sierra",
  "Castellón"
)

let segundaResidenciaLisa = new Direccion(
  "Carrer Rodarte",
  809,
  3,
  "C",
  63520,
  "Aljaraque",
  "Huelva"
)

let mailPersonalLisa = new Mail(
  "personal",
  "LisaTorres97@gmail.com"
)

let mailTrabajoLisa = new Mail(
  "trabajo",
  "lisaMKD@bestproyect.es"
)

let telefonoFijoLisa = new Telefono(
  "fijo",
  9538573213
)

let telefonoMovilLisa = new Telefono(
  "movil",
  6735895521
)

let datosLisa = new Persona(
  'Lisa',
  'Torres Crespo',
  25,
  '46753784M',
  new Date(1995, 7, 29),
  'azul cielo',
  'mujer',
  [primeraResidenciaLisa, segundaResidenciaLisa],
  [mailPersonalLisa, mailTrabajoLisa],
  [telefonoFijoLisa, telefonoMovilLisa],
  "La segunda residencia es para su madre"
);

console.log("Contactos antes del cambio:");
console.log(datosRocio);
console.log(datosAdrian);
console.log(datosLisa);

let agenda: Persona[] = new Array(datosRocio, datosAdrian, datosLisa);

let dniABuscar: string = "49567897S";

let personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

let nuevaDireccion = new Direccion(
  "Plaza Cruz",
  10,
  7,
  "B",
  94616,
  "La Garza",
  "Jaén"
)

let nuevoMail = new Mail(
  "trabajo",
  "marketingdigitalayuda@outlook.com"
)

let nuevoTelefono = new Telefono(
  "fijo",
  995664739
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosRocio);
console.log(datosAdrian);
console.log(datosLisa)
