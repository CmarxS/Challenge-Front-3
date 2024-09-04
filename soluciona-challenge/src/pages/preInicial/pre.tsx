import './pre.css'
import Logo from '../../images/logo-branca - Copia.png'
import { Link } from 'react-router-dom';
const Pre = () => {
    return (
        <main className='pre'>
            <img src={Logo} alt="" />
            <Link to='/login'><button className='btn-login'>Acessar Conta</button></Link><br />
            <Link to='/cadastro'><button className='btn-cadastro'>Criar Conta</button></Link>
        </main>
    );
    }
export default Pre;