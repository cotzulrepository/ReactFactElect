export const createPersonaAdapter = (persona: any) => ({
  codigo: persona.data.codigo,
  nombre: persona.data.nombre,
  ruc: persona.data.ruc,
  cedula: persona.data.cedula,
  estado: persona.data.estado,
  nombrecomercial: persona.data.nombrecomercial,
  tipo: persona.data.tipo,
  especial: persona.data.especial,
  telefono: persona.data.telefono,
  direccion: persona.data.direccion,
  provincia: persona.data.provincia,
  ciudad: persona.data.ciudad,
  genero: persona.data.genero,
  estadocivil: persona.data.estadocivil,
  email: persona.data.email,
  personaasociadaid: persona.data.personaasociadaid,
  usuarioing: persona.data.usuarioing,
  fechaing: persona.data.fechaing,
  usuariomod: persona.data.usuariomod,
  fechamod: persona.data.fechamod,
  usuarioelim: persona.data.usuarioelim,
  fechaelim: persona.data.fechaelim
});
