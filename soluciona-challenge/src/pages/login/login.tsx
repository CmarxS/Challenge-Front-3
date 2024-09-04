import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";
import Input from "../../components/input/input";
const Login = () => {
    return (
        <>
        <Header />
        <Formulario h2="Acessar conta" h4="Preencha seus dados de acesso para continuar." h5="Ainda não possui uma conta Porto Seguro?" link="Crie agora mesmo :)" botao="Acessar conta!" enderecoLink="/cadastro">
            <Input type="CPF" name="CPF" placeholder="Digite seu CPF ou seu CNPJ" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
        </Formulario>
        <Footer />
        </>
    );
    }
export default Login;