import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Caio from "../../images/CaioMarques.png"
import Caio2 from "../../images/Caio.png"
import Felipe from "../../images/Felipe - Copia.png"
import "./integrantes.css"
const Integrantes = () => {
    return (
        <>
        <Header />
        <main className="integrantes">
        <img src={Caio} alt="" />
        <img src={Caio2} alt="" />
        <img src={Felipe} alt="" />
        </main>
        <Footer />
        </>
    );
    }
export default Integrantes;