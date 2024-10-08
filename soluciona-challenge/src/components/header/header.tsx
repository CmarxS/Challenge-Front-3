import { Link } from 'react-router-dom';
import BCA from '../buttonCentroAutomotivo/bca';
import './header.scss';

const Header = () => {
    return (
        <header>
            <Link to={'/'}><img className='logo-soluciona' src="src/images/LogoChallenge - Copia.png" alt="" /></Link>
            <Link to='/informacoes-conta'>
                <div className="profile-header">
                    <img src="src/images/Profile.png" alt="" />
                    Olá, Usuário
                </div>
            </Link>
            <div className="button-container">
                <BCA />
            </div>
        </header>
    );
};
export default Header;