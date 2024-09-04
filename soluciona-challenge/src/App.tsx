import { Route, Routes } from 'react-router'
import './App.css'
import Inicial from './pages/inicial/inicial'
import { BrowserRouter } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro'
import Integrantes from './pages/integrantes/integrantes'
import Login from './pages/login/login'
import Oficinas from './pages/oficinasProximas/oficinasProximas'
import InfosCarros from './pages/infosCarro/infosCarro'
import InfosClientes from './pages/infosCliente/infosCliente'
import CadastroCA from './pages/cadastroCA/cadastroCA'
import Chat from './pages/chatIA/chat'
import Orcamentos from './pages/orcamentos/orcamentos'
import Pre from './pages/preInicial/pre'
import CadastroVeiculo from './pages/cadastroVeiculo/cadastroVeiculo'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/cadastroCentroAutomotivo" element={<CadastroCA />}/>
      <Route path="/cadastroVeiculo" element={<CadastroVeiculo />}/>
      <Route path="/chat-bot" element={<Chat />}/>
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oficinas" element={<Oficinas />} />
      <Route path="/meu-veiculo" element={<InfosCarros />} />
      <Route path="/informacoes-conta" element={<InfosClientes />} />
      <Route path="/orcamentos" element={<Orcamentos />} />
      <Route path="/pre" element={<Pre />} />
      <Route path="*" element={<Pre/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
