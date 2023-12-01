import estilo from './Encabezado.module.css';
import Logo from '../../assets/logo.svg';
import Perfil from '../../assets/perfil.svg'
import Vinculo from './Vinculo';


function Encabezado() {
    return (
        <header className={estilo.headerContainer}>
            <div className={estilo.headerLeftContainer}>
                <img src={Logo} className={estilo.logoIcon} alt="logo" />
                <a href="/" className={estilo.headerTitle}>Metas App</a>
            </div>
            <nav >
                <Vinculo
                    to="/perfil"
                    Icono={Perfil}
                    alt="Icono del perfil" />
            </nav>
        </header>
    );
}

export default Encabezado;