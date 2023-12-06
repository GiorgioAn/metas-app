import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../../../servicios/Memoria";
import estilo from "./Detalles.module.css";

function Detalles() {
  const { id } = useParams();

  const [form, setForm] = useState({
    detalles: "",
    eventos: 3,
    periodo: "año",
    icono: "🏄🏽‍♂️",
    meta: 100,
    plazo: "28-03-2025",
    completado: 1,
  });

  const [estado, enviar] = useContext(Contexto);

  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  useEffect(() => {
    const metaMemoria = estado.objetos[id];
    if (!id) return;
    if (!metaMemoria) {
      return navegar("/404");
    }
    setForm(estado.objetos[id]);
  }, [id]);

  const navegar = useNavigate(Contexto);

  /* INVOCACION PARA LA FUNCION EN EL REDUCTOR "Memroia.jsx" PARA LA ACCION CREAR */
  const crear = () => {
    enviar({ tipo: "crear", meta: form });
    navegar("/lista");
  };

  /* INVOCACION PARA LA FUNCION EN EL REDUCTOR "Memroia.jsx" PARA LA ACCION ACTUALIZAR */
  const actualizar = () => {
    enviar({ tipo: "actualizar", meta: form });
    navegar("/lista");
  };

  /* INVOCACION PARA LA FUNCION EN EL REDUCTOR "Memroia.jsx" PARA LA ACCION BORRAR */
  const borrar = () => {
    enviar({ tipo: "borrar", id });
    navegar("/lista");
  };

  /* INVOCACION PARA LA FUNCION EN EL REDUCTOR "Memroia.jsx" PARA LA ACCION CANCELAR */
  const cancelar = () => {
    navegar("/lista");
  };

  const frecuencia = ["día", "semana", "mes", "años"];
  const emoji = ["⛷️", "🏄🏽‍♂️", "📖", "⚽", "🛩️", "💞"];

  /* FORMULARIO */

  return (
    // CONTENEDOR DE TODO EL FORMULARIO Y BOTONES
    <div className="tarjeta">
      {/* CONTENEDOR FORMULARIO */}

      <form className="p-4">
        <label className="label">
          Describe tu meta
          <input
            className="input"
            type="text"
            placeholder="ej. 52 caminatas"
            value={detalles}
            onChange={(e) => onChange(e, "detalles")}
          />
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              className="input mr-6"
              type="number"
              value={eventos}
              onChange={(e) => onChange(e, "eventos")}
            />
            <select
              className="input"
              value={periodo}
              onChange={(e) => onChange(e, "periodo")}
            >
              {frecuencia.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
              {/* <option value="semana">a la semana</option> */}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={meta}
            onChange={(e) => onChange(e, "meta")}
          />
        </label>
        <label className="label">
          ¿Tienes una fecha limite?
          <input
            className="input"
            type="date"
            value={plazo}
            onChange={(e) => onChange(e, "plazo")}
          />
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input
            className="input"
            type="number"
            value={completado}
            onChange={(e) => onChange(e, "completado")}
          />
        </label>
        <label className="label">
          Escoge el icono para la meta
          <select
            className="input"
            value={icono}
            onChange={(e) => onChange(e, "icono")}
          >
            {emoji.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
            {/* <option value="🏃🏽‍♂️">🏃🏽‍♂️</option> */}
          </select>
        </label>
      </form>

      {/* CONTENEDOR BOTONES */}

      <div className={estilo.contenedorBotones}>
        {!id && (
          <button className="boton boton--negro" onClick={crear}>
            Crear
          </button>
        )}
        {id && (
          <button className="boton boton--negro" onClick={actualizar}>
            Actualizar
          </button>
        )}
        {id && (
          <button className="boton boton--rojo" onClick={borrar}>
            Borrar
          </button>
        )}
        <button className="boton boton--gris" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Detalles;
