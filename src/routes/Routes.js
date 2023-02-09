import React,{Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import DocumentoElectronico from "../pages/DocumentoElectronico";
import Persona from "../pages/management/Index";
import CrearPersona from "../pages/management/FormPersona";
import PersonaNuevo from "../pages/personas/Index";
import store from '../redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading ...</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/management/persona" element={<Persona />} />
              <Route
                path="/management/crearpersona"
                element={<CrearPersona />}
              />
              <Route
                path="/documentoelectronico"
                element={<DocumentoElectronico />}
              />
              <Route path="/principal" element={<Principal />} />
              <Route path="/personas/persona" element={<PersonaNuevo />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
