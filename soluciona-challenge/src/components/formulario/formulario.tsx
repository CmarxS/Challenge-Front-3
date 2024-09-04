import { PropsWithChildren } from 'react';
import './formulario.css'
import { Link } from 'react-router-dom';
interface FormularioProps extends PropsWithChildren<{}> {
    h2: string;
    h4: string;
    h5: string;
    link: string;
    botao: string;
    enderecoLink: string;
}

const formulario = ({ h2, h4, h5, link, botao, enderecoLink ,children}: FormularioProps) => { 
    return (
        <div className="container-formulario">
        <form>
        <h2>{h2}</h2>
        <h4>{h4}</h4>
            {children}
            <br />
            <button type="submit">{botao}</button>
        <h5>{h5}</h5>
        <Link to={enderecoLink} className='form-link'>{link}</Link>
        </form>
        </div>
    );
    }

export default formulario;