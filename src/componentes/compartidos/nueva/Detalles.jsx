function Detalles() {

    const opcionesDeFrecuencia = ["día", "semana", "mes", "años"];
    const opcionesDeEmoji = ["⛷️", "🏄🏽‍♂️", "📖", "⚽", "🛩️"];

    return (
        <div>
            <form action="">
                <label htmlFor="">
                    Desscribe tu meta
                    <input type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label htmlFor="">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number" />
                        <select name="" id="">
                            {opcionesDeFrecuencia.map(opcion => <opcion value={opcion}>{opcion}</opcion>)}
                            {/* <option value="semana">a la semana</option> */}
                        </select>
                    </div>
                </label>
                <label htmlFor="">
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label htmlFor="">
                    ¿Tienes una fecha limite?
                    <input type="date" name="" id="" />
                </label>
                <label htmlFor="">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input type="number" name="" id="" />
                </label>
                <label htmlFor="">
                    Escoge el icono para la meta
                    <select name="" id="">
                        {opcionesDeEmoji.map(opciones => <opcion value={opciones}>{opciones}</opcion>)}
                       {/* <option value="🏃🏽‍♂️">🏃🏽‍♂️</option> */}
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;