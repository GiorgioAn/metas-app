import estilo from './Detalles.module.css';

function Detalles() {

    const frecuencia = ["día", "semana", "mes", "años"];
    const emoji = ["⛷️", "🏄🏽‍♂️", "📖", "⚽", "🛩️"];

    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Desscribe tu meta
                    <input className="input" type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label className="label">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number" />
                        <select className="input">
                            {frecuencia.map((opcion) => (<option key={opcion} value={opcion}>{opcion}</option>))}
                            {/* <option value="semana">a la semana</option> */}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    ¿Tienes una fecha limite?
                    <input className="input" type="date" />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select className="input">
                        {emoji.map((opcion) => (<option key={opcion} value={opcion}>{opcion}</option>))}
                        {/* <option value="🏃🏽‍♂️">🏃🏽‍♂️</option> */}
                    </select>
                </label>
            </form>
            <div className={estilo.contenedorBotones}>
                <button className="boton boton--negro">Crear</button>
                <button className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;