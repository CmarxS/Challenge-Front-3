import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Formulario from "../../components/formulario/formulario";
import Input from "../../components/input/input";

const CadastroCA = () => {
    return (
        <div>
        <Header />
        
        <Formulario h2="Cadastrar centro automotivo" h4="Preencha os campos abaixo para criar conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/login">
            <Input type="text" name="nome" placeholder="Digite o nome da sua oficina" />
            <Input type="email" name="email" placeholder="Digite o email da oficina" />
            <Input type="CNPJ" name="CNPJ" placeholder="Digite o CNPJ" />
            <Input type="text" name="telefone" placeholder="Digite seu telefone" />
            <Input type="CEP" name="CEP" placeholder="Digite o CEP" />
        </Formulario>
        <Footer />
        </div>
    );
}

export default CadastroCA;