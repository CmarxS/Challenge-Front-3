import Cards from "../cards/cards";
import Clientes from "../../images/Cliente.png";
import Relatorio from "../../images/Relatorio.png";
import Orcamentos from "../../images/Orçamentos.png";
import ChatBot from "../../images/ChatBot.png";
import Carro from "../../images/Carro.png";
import Oficinas from "../../images/Oficinas.png";
import './chp.scss';
import { Link } from "react-router-dom";
import Porto from "../../images/Porto-Seguro.jpg";
const CHP = () => {

    const HandleRelatorio = () => {
        console.log("Relatório");
        alert("Conectar o bluetooth do scanner OBD");
    }

    return (
        <>
            <div className="container">
                <div className="container-cards">
                    <div className="row">
                        <div className="col">
                            <Link to={'/informacoes-conta'} className="no-decoration">
                                <Cards imagem={Clientes} texto="Informações da conta" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/meu-veiculo'} className="no-decoration">
                                <Cards imagem={Carro} texto="Meu veículo" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/oficinas'} className="no-decoration">
                                <Cards imagem={Oficinas} texto="Oficinas Próximas" cor="" />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio} texto="Gerar relatório" cor="" />
                        </div>
                        <div className="col">
                            <Link to={'/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos} texto="Orçamentos" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/chat-bot'} className="no-decoration">
                                <Cards imagem={ChatBot} texto="Chat Bot" cor="azul" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-mobile">
                <div className="container-cards">
                    <div className="row">
                        <div className="col">
                            <Cards onClick={HandleRelatorio} imagem={Relatorio} texto="Relatório" cor="" />
                        </div>
                        <div className="col">
                            <Link to={'/orcamentos'} className="no-decoration">
                                <Cards imagem={Orcamentos} texto="Orçamentos" cor="" />
                            </Link>
                        </div>
                        <div className="col">
                            <Link to={'/chat-bot'} className="no-decoration">
                                <Cards imagem={ChatBot} texto="Chat Bot" cor="azul" />
                            </Link>
                        </div>
                    </div>
                </div>
                <h1>Seja cliente <span className="letra-azul">Porto</span></h1>
                <img src={Porto} alt="" className="img-porto"/>
            </div>
        </>
    )
}

export default CHP;