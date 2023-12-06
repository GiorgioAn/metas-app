import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Contexto } from '../../../servicios/Memoria';
import Meta from './Meta';

/* const metaMock = {
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": "1",
    "icono": "🏃🏽‍♂️",
    "meta": "365",
    "plazo": "2030-01-01",
    "completado": 150
} */

/* Ahora meta que es llamado mediante el contexto como meta en archivo memoria, como una constante de lista de objetos que se coloca en el context que se compartira */
/* const listaMock = [
    {
        "id": "1",
        "detalles": "Correr por 30 minutos",
        "periodo": "día",
        "eventos": "1",
        "icono": "🏃🏽‍♂️",
        "meta": "365",
        "plazo": "2030-01-01",
        "completado": 250
    },
    {
        "id": "2",
        "detalles": "Surfear",
        "periodo": "Semana",
        "eventos": "1",
        "icono": "🏄🏽‍♂️",
        "meta": "100",
        "plazo": "2030-01-01",
        "completado": 3
    },
    {
       "id": "3",
        "detalles": "Hacer el amor",
        "periodo": "día",
        "eventos": "1",
        "icono": "💞",
        "meta": "250",
        "plazo": "2030-01-01",
        "completado": 30
    },
]; */

function Lista() {
    const [estado, enviar] = useContext(Contexto);
    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet />
        </>
    );
}

export default Lista;