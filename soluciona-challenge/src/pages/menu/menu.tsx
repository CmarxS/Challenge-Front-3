import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cards from "../../components/cards/cards";
import Clientes from "../../images/Cliente.png";
import Carro from "../../images/carro.png";
import Oficinas from "../../images/oficinas.png";
import Relatorio from "../../images/relatorio.png";
import Orcamentos from "../../images/Orçamentos.png";
import ChatBot from "../../images/chatbot.png";
import "./menu.scss";
const Menu = () => {

    const HandleRelatorio = () => {
        console.log("Relatório");
        alert("Conectar o bluetooth do scanner OBD");
    }
    
    return (
        <>
        <Header/>
        <div className="container-cards-menu">
            <Link to="/informacoes-conta">
                <Cards imagem={Clientes} texto="Clientes" />
            </Link>
            <Link to="/meu-veiculo">
                <Cards imagem={Carro} texto="Meu veículo"/>
            </Link>
            <Link to="/oficinas">
                <Cards imagem={Oficinas} texto="Oficinas" />
            </Link>
            <Cards imagem={Relatorio} texto="Relatório" onClick={HandleRelatorio}/>
            <Link to="/orcamentos">
                <Cards imagem={Orcamentos} texto="Orçamentos" />
            </Link>
            <Link to="/chat-bot">
                <Cards imagem={ChatBot} texto="Chatbot" cor="azul"/>
            </Link>
        </div>
        <Footer/>
        </>
    );
};

export default Menu;