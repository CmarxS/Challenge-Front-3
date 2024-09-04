import { Link } from 'react-router-dom';
import BCA from '../buttonCentroAutomotivo/bca';
import './header.css';

const Header = () => {
return (
        <header>
            <Link to={'/'}><img src="src/images/LogoChallenge - Copia.png" alt="" /></Link>
            <BCA />
        </header>
    );
    };
export default Header;