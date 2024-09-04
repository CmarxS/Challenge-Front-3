import { Link } from 'react-router-dom';
import './footer.css';
const footer = () => {
    return (
        <footer>
            <Link to='/integrantes'><h6>Página dos integrantes</h6></Link>
            <hr />
        </footer>
    )
}
export default footer;