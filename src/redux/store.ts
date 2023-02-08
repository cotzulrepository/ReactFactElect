import { configureStore } from '@reduxjs/toolkit';
import { personaSlice } from './states/persona';

export interface AppStore {
  persona: any;
}

export default configureStore<AppStore>({
  reducer: {
    persona: personaSlice.reducer
  }
});
