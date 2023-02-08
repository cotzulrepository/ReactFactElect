import { Persona } from '../models';
import { createContext } from 'react';

export const SelectedPersonaContext = createContext({
  selectedPersona: {} as Persona,
  setSelectedPersona: (persona: Persona) => {}
});
