import { Persona } from '../../models';
import { createSlice } from '@reduxjs/toolkit';

export const PersonaEmptyState: Persona = {
  codigo: 0,
  nombre: '',
  ruc: '',
  cedula: '',
  estado: '',
  nombrecomercial: '',
  tipo: '',
  especial: '',
  telefono: '',
  direccion: '',
  provincia: '',
  ciudad: '',
  genero: '',
  estadocivil: '',
  email: '',
  personaasociadaid: '',
  usuarioing: 0,
  fechaing: new Date(),
  usuariomod: 0,
  fechamod: null,
  usuarioelim: 0,
  fechaelim: null
};

export const personaSlice = createSlice({
  name: 'persona',
  initialState: PersonaEmptyState,
  reducers: {
    createPersona: (state, action) => action.payload,
    modifyPersona: (state, action) => ({ ...state, ...action.payload }),
    resetPersona: () => PersonaEmptyState
  }
});

export const { createPersona, modifyPersona, resetPersona } = personaSlice.actions;

export default personaSlice.reducer;
