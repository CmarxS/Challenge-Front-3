import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './chat.scss'
import Logo from "../../images/LogoChallenge - Copia.png"
const Chat = () => {
    return (
        <>
        <Header />
        <main className="ia">
            <div className="container-chat">
                <img src={Logo} alt="" />
                <div className="container-input-ia">
                    <div className="container-sugestoes">
                        <div className="sugestoes">Gerar orçamento</div>
                        <div className="sugestoes">Entender relatório</div>
                        <div className="sugestoes">Onde abro o porta malas?</div>
                    </div>
                    <input type="text" placeholder="Digite aqui..."/>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
    }
export default Chat;