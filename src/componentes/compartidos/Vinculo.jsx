import estilo from './Vinculo.module.css';

function Vinculo({ Icono, alt, texto, href }) {
    return (
        <a href={href} className={estilo.vinculoContainer}>
            <img src={Icono} alt={alt} className={estilo.icon} />
            {/* Se coloca {alt && <img /> para indicar que si hay alt se renderice y sino hay texto no se renderice} */}
            {texto &&<span className={estilo.texto}>{texto}</span>}
        </a>
    );
}

export default Vinculo;
