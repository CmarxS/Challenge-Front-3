import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";
import Header from "../../components/header/header";
import Input from "../../components/input/input";

const CadastroVeiculo = () => {
    return (
        <div>
            <Header />
            <Formulario h2="Cadastrar veículo" h4="Preencha o campo abaixo para adicionar o seu veículo." h5="Não deseja cadastrar outro veículo?" link="Volte para página inicial aqui :)" botao="Cadastrar!" enderecoLink="/">
                <Input type="text" name="placa" placeholder="Digite a placa do seu carro" pattern="([A-Z]{3}-\d{4}|[A-Z]{3}\d[A-Z]\d{2})" />
            </Formulario>
            <Footer />
        </div>
    )
}
export default CadastroVeiculo;