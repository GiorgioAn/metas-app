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

const listaMock = [{
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": "1",
    "icono": "🏃🏽‍♂️",
    "meta": "365",
    "plazo": "2030-01-01",
    "completado": 150
}];

function Lista () {
    return ( 
        listaMock.map(meta => <Meta {...meta}></Meta>)
     );
}

export default Lista ;