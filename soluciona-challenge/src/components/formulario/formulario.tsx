import { PropsWithChildren } from 'react';
import './formulario.scss'
import { Link, useNavigate } from 'react-router-dom';
interface FormularioProps extends PropsWithChildren<{}> {
    h2: string;
    h4: string;
    h5: string;
    link: string;
    botao: string;
    enderecoLink: string;
}

const Formulario = ({ h2, h4, h5, link, botao, enderecoLink ,children}: FormularioProps) => { 
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/');
    };
    return (
        <div className="container-formulario">
        <form onSubmit={handleSubmit}>
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

export default Formulario;