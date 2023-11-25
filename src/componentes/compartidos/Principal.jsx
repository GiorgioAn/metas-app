import './Principal.css'
import Vinculo from './Vinculo';
import Lista from '../../assets/lista.svg'
import Nueva from '../../assets/nueva.svg'

function Principal({ children }) {
  return (
    <div className="body-container">
      <aside className="aside-container">
        <Vinculo href="/lista_de_metas" texto="Lista de metas">
          <img src={Lista} className="perfil-icon" alt="lista" />
        </Vinculo>
        <Vinculo href="/nueva_meta" texto="Nueva meta">
          <img src={Nueva} className="perfil-icon" alt="nueva" />
        </Vinculo>
      </aside>
      <main className="main-container">
        {children}
      </main>
    </div>
  );
}

export default Principal;