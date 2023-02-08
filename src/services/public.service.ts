import { Persona } from '../models';
import { loadAbort } from '../utilities';
import axios from 'axios';

export const personaService = (persona : Persona) => {
  const controller = loadAbort();
  return {
    call: axios.post<Persona>('https://localhost:44322/api/personas', persona , { signal: controller.signal }),
    controller
  };
};
