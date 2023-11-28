import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'
import estilo from './Principal.module.css';
import Vinculo from './Vinculo';
import Lista from '../../assets/lista.svg';
import Nueva from '../../assets/nueva.svg';

function Principal({ children }) {
  return (
    <div className={estilo.bodyContainer}>
      <aside className={estilo.asideContainer}>
        <Vinculo
          href="/lista_de_metas"
          texto="Lista de metas"
          Icono={Lista}
          alt="Icono de lista de metas" />
        <Vinculo
          href="/nueva"
          texto="Nueva meta"
          Icono={Nueva} 
          alt="Icono de meta nueva"/>
      </aside>
      <main className={estilo.mainContainer}>
        {children}
      </main>
    </div>
  );
}

Principal.propTypes = {
  children: PropTypes.node, // Validación para la prop 'children'
};


export default Principal;