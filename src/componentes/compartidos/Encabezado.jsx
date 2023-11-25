import './Encabezado.css'
import Logo from '../../assets/logo.svg'
import Perfil from '../../assets/perfil.svg'

function Encabezado() {
    return (
        <header className="header-container">
            <div className="header-left-container">
                <img src={Logo} className="logo-icon" alt="logo"/>
                <a href="/" className="header-title">Metas App</a>
            </div>
            <nav >
                <a href="/perfil" className="header-right-navigation-link">
                    <img src={Perfil} className="perfil-icon" alt="perfil"/>
                </a>
            </nav>
        </header>
    );
}

export default Encabezado;