import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './componentes/compartidos/Layout';
import Modal from "./componentes/compartidos/Modal";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Lista from './componentes/compartidos/lista/Lista';
import Detalles from './componentes/compartidos/nueva/Detalles';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />}>
          <Route path="/lista/:id" element={
            <Modal>
              <Detalles />
            </Modal>
          } />
        </Route>
        <Route path="/nueva" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncontrado />} />
    </Routes>

  );
}

export default App;