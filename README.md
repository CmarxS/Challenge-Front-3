# **Projeto: SolucIonA**

## **Descrição**
O **SolucIonA** é um protótipo de site desenvolvido em **React** e **Vite**, que simula o produto final de uma solução inovadora. A proposta é criar uma **IA** capaz de interpretar relatórios provenientes de um **Scanner OBD**. Com os dados recebidos do scanner e o banco de dados de valores de manutenção automotiva, a IA oferece orçamentos mais precisos para os usuários.

## **Funcionalidades do Site**
O site contém informações dos veículos registrados e do usuário. Para acessar essas funcionalidades, o usuário precisa primeiro se cadastrar. Após o cadastro, ele é redirecionado para a tela inicial, onde pode:

- **Consultar as informações dos veículos e do perfil:**
  Para acessar as informações basta entrar e sua respectiva área. A ideia é que as informações do perfil sejam exibidas de acordo com as informações informadas no cadastro. Já as informações do veículo apareceram de acordo com as informações da placa (a ideia é usar uma API externa)
- **Acessar a IA de diagnóstico e orçamento:**
  A IA, exclusiva dos clientes Porto, auxiliará a entender o relatório gerado pelo Scanner OBD e a partir dele gerar um orçamento para o cliente. Além de responder questões sobr o carro, por exemplo: "Como faço para limpar o vidro de trás do meu veículo?" ou "Como abrir a portinha da gasolina em meu carro?" (desenvolvido apenas a aparência).
- **Localizar oficinas próximas à sua região:**
  Para localizar as oficinas próximas à região, no desktop, basta digitar o CEP em que ele se encontra e então o site retornará uma lista com 5 oficinas próximas à ele. Já na versão mobile, está guia mostrará o mapa da localização atual dele e destacará as oficinas próximas.
- **Conectar o Scanner OBD:**
  Ao clicar abre uma janela para conectar o bluetooth do aparelho com o Scanner OBD
- **Gerar um orçamento personalizado ao descrever problemas no veículo (somente com base no banco de dados; a IA é exclusiva para clientes Porto):**
  Ao digitar o problema do carro (necessário ter conhecimento do problema para maior acertividade) com base no banco de dados será gerado um orçamento baseado na descrição fornecida pelo cliente.

## **Como rodar o projeto**
- Necessário ter a versão 20.15.1 do **NodeJS**
- Necessário ter a versão 10.7.0 do **Node Package Manager (NPM)**
- Rodar o npm install
- Instalar o SCSS (npm install sass –save-dev)
- Rodar o npm run dev

## **Integrantes**
- **Caio Marques** (RM 555997)
- **Felipe Camargo Revolta e Souza** (RM 556325)
- **Caio Amarante Miranda de Lima** (RM 558640)

## **Turma**
- **1TDSR**

## **Links**
- Youtube - https://youtu.be/552KfV_Zkow
- Github - https://github.com/CmarxS/Challenge-Front-3
- Figma - https://www.figma.com/design/JLwXOMlYqJsJqMbSoxyNzN/Challenge?node-id=0-1&node-type=canvas&t=YmEyJRWRhag5sA5l-0
