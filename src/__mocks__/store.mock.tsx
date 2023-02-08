import { personaSlice } from '../redux/states/persona';
import { AppStore } from '../redux/store';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore<AppStore>({
  reducer: {
    persona: personaSlice.reducer
  }
});
