import estilo from './Meta.module.css';

function Meta({ icono, eventos, periodo, detalles, meta, completado }) {

    return (
        <div className={estilo.metaContainer + " tarjeta"} >
            <div className={estilo.leftMetaContainer}>
                <div className={estilo.metaIcono}>{icono}</div>
                <p className="text-xl ml-5 mr-10">{eventos}
                    <sub className="text-xs text-gray-500 ml-1">/ {periodo}</sub></p>
                <p className="">{detalles}</p>
            </div>
            <div className={estilo.rightMetaContainer}>
                <div className="relative m-2 mx-5">
                    <p className="text-center">{completado} de {meta}</p>
                    <div className={estilo.barra1}>
                        <div style={{ width: `${Math.round((completado / meta) * 100)}%` }}
                            className={estilo.barra2}></div>
                    </div>
                </div>
                <button className="boton boton--gris">Completado</button>
            </div>
        </div>
    );
}

export default Meta;