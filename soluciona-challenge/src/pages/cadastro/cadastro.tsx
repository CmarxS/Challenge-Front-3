import Footer from "../../components/footer/footer"
import Formulario from "../../components/formulario/formulario";
import Header from "../../components/header/header"
import Input from "../../components/input/input";

const Cadastro = () => {
    return (
        <div>
            <Header />
            <Formulario h2="Cadastrar conta" h4="Preencha os campos abaixo para criar sua conta." h5="Já possui uma conta Porto Seguro?" link="Acesse agora mesmo :)" botao="Cadastrar-se!" enderecoLink="/login">
                <Input type="text" name="nome" placeholder="Digite seu nome" />
                <Input type="email" name="email" placeholder="Digite seu email" />
                <Input type="CPF" name="CPF" placeholder="Digite seu CPF" />
                <Input type="date" name="data" placeholder="" />
                <Input type="text" name="telefone" placeholder="Digite seu telefone" />
                <Input type="CEP" name="CEP" placeholder="Digite seu CEP" />
                <Input type="text" name="placa" placeholder="Digite a placa do seu carro" />
                <Input type="password" name="password" placeholder="Digite sua senha" />
                <Input type="password" name="password" placeholder="Confirme sua senha" />
            </Formulario>
            <Footer />
        </div>
    )
}
export default Cadastro;