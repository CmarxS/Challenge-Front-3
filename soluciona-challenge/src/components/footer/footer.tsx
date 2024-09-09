import { Link } from 'react-router-dom';
import './footer.scss';
import Casa from '../../images/casa.png'
import Mapa from '../../images/mapa.png'
import Menu from '../../images/menu.png'
import Chatbot from '../../images/chatbot-black.png'
const footer = () => {
    return (
        <footer>
            <Link to='/integrantes'><h6>Página dos integrantes</h6></Link>
            <hr />
            <div className="footer-icons">
                <Link to='/'><img src={Casa} alt="" /></Link>
                <Link to='/menu'><img src={Menu} alt="" /></Link>
                <Link to='/oficinas'><img src={Mapa} alt="" /></Link>
                <Link to='/chat-bot'><img src={Chatbot} alt="" /></Link>
            </div>
        </footer>
    )
}
export default footer;