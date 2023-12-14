import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Contexto } from "./servicios/Memoria";
import { pedirMetas } from "./servicios/Pedidos";
import './App.css'
import Layout from './componentes/compartidos/Layout';
import Modal from "./componentes/compartidos/Modal";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Lista from './componentes/compartidos/lista/Lista';
import Detalles from './componentes/compartidos/nueva/Detalles';


function App() {

  const [ , enviar] = useContext(Contexto);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const metas = await pedirMetas();
        enviar({ tipo: "colocar", metas });
      } catch (error) {
        console.error("Error al obtener las metas:", error);
      }
    };

    obtenerDatos();
  }, [enviar]);


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