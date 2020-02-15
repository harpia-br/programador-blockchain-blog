import React from 'react'
import { 
	Image,
	Alert,
} from 'react-bootstrap';
import Highlight from 'react-highlight'
import { combineReducers } from 'redux'
import {
	PEGAR_TUTORIAIS, 
} from '../actions'

const estadoTutoriais = [
	{
		id: 1,
		data: '02 de Fevereiro, 2020',
		url: 'construaSuaAplicacaoBlockchain',
		titulo: 'Contrua Sua Primeira Aplicação Blockchain',
		imagem: 'imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png',
		chamada: <span>Estou aqui para te mostrar como criar sua primeira aplicação blockchain com <b>React</b>, <b>Ehtereum</b>, <b>Web3.js</b> e <b>Solidity smart contracts</b>. Você não precisa saber nada sobre blockchain para seguir. Eu vou ensinar do zero. Use esse guia passo a passo com exemplo de códigos e instruções escritas para começar sua jornada como desenvolvedor Blockchain!</span>,
		rodape: 'Comece a aprender Blockchain agora! >>',
		h1: 'Como Construir uma Aplicação Blockchain com React, Ethereum, Web3.js e Solidity Smart Contracts',
		listaDeConteudo: [
			{
				ancora: 'tutorialInstalandoDependencias',
				titulo: 'Instalando Dependências'
			},
			{
				ancora: 'tutorialConfigurandoOProjeto',
				titulo: 'Configurando o Projeto'
			},
			{
				ancora: 'tutorialContratoInteligente',
				titulo: 'Contrato Inteligente'
			},
			{
				ancora: 'tutorialAplicacaoWebComReact',
				titulo: 'Aplicação Web com React'
			},
			{
				ancora: 'tutorialTestandoOContrato',
				titulo: 'Testando o Contrato'
			},
			{
				ancora: 'tutorialConsideracoesFinaos',
				titulo: 'Considerações Finais'
			},
		],
		oQueVamosConstruir: <div id='conteudoOQueNosVamosContruir'>
			<h3>O que vamos construir?</h3>
			<p>
				Eu escolhi uma aplicação de lista de tarefas para esse tutorial por causa que o meio mais rápido de <b>aprender uma nova tecnologia</b> é fazendo.
				Eu vou te ensina como ler e escrever dados na blockchain, assim como a lógica de negócio que vai controla o comportamento da nossa aplicação. 
				Assim como também ensinar os fundamentos de como a <b>Blockchain</b> funciona e como escrever <b>Smart Contracts Ethereum</b>.
			</p>
		</div>,
		comoNossaBlockchainVaiFuncionar: <div id='tutorialComoNossoBlockchainVaiFuncionar'>
			<h3>Como nosso Blockchain vai funcionar?</h3>
			<p>
				Nos vamos criar uma <b>aplicação web com React</b> de lista de tarefas que falará diretamente com a Blockchain. 
				Nos vamos usar a <b>Ethereum Blockchain</b> nesse tutorial, criaremos um <b>smart contract em Solidity</b> que alimetará a lista de tarefas e implantaremos na blockchain.
				Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para iteragir com nossa lista de tarefas.
			</p>
		</div>,
		conteudo: <>
			<div id='tutorialConfigurandoOProjeto'>
				<h3>Configurando o Projeto</h3>
				<p>
					Vamos criar um projeto com a Biblioteca React. Primeiro vamos instalar e depois criar o projeto, entre no terminal:
				</p>
				<Alert variant='secondary'>
					<p>
						$ sudo npm install create-react-app -g
					</p>
					<p>
						$ sudo create-react-app listaDeTarefas
					</p>
					<p>
						$ cd listaDeTarefas
					</p>
				</Alert>
				<br />
				<p>
					Agora vamos inicializar o Truffle, entro no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle init
				</Alert>
				<p>
					Vamos começar a desenvolver o smart contract que vai administrar a lista de tarefas. Crie um arquivo novo com extensão 'sol':
				</p>
				<Alert variant='secondary'>
					$ sudo touch src/contracts/ListaDeTarefas.sol
				</Alert>
				<p>
					Abra o arquivo com seu editor favorito e vamos iniciar com a versão e declaração do contrato
				</p>
				<Alert variant='secondary'>
					pragma solidity ^0.5.0;
					<br />
					<br />
					contract ListaDeTarefas {'{'}
					<br />
					&emsp;uint public contagemDeTarefas = 0;
					<br />
					{'}'}
				</Alert>
				<p>
					Nos criamos um smart contract chamado <b>ListaDeTarefas</b> seguido pelas 'chaves'.
					Nos vamos contabilizar as tarefas através de uma variável de estado, qualquer dado nessa variável será escrita no armazenamento da Blockchain.
					O modificador especial chamado 'public' instrui ao Solidity crie uma função chamada 'contagemDeTarefas()' para poder acessar a variável de fora do contrato, como a aplicação web ou pelo terminal.
				</p>
				<p>
					Agora vamos compliar o smart contract, entre no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle compile
				</Alert>
				<p>
					Parabéns! Você escreveu seu primeiro <b>smart contract Ethereum</b>. Um novo arquivo foi gerado 'src/abis/ListaDeTarefas.json'. 
					Esse arquivo smart contract ABI, 'Abstract Binary Interface'. Esse arquivo contém a versão compilado do bytecode para rodar na Máquina Virtual Ethereum e a representação JSON para a aplicação web possa acessar como o JavaScript.
				</p>
				<p>
					Agora vamos configurar o projeto para acessar nossa rede pessoal e criar um arquivo de migração do nosso código para a rede Blockchain.
				</p>
				<p>
					Acesse o arquivo 'truffle-config.js' e altere o código assim:
				</p>
				<Alert variant='secondary'>
					module.exports = {'{'} <br />
					&emsp;nertworks: {'{'} <br />
					&emsp;&emsp;development: {'{'} <br />
					&emsp;&emsp;&emsp;host: '127.0.0.1', <br />
					&emsp;&emsp;&emsp;port: 7545, <br />
					&emsp;&emsp;&emsp;network_id: '*', <br />
					&emsp;&emsp;{'}'} <br />
					&emsp;{'}'}, <br />
					contracts_build_directory: './src/abis/',<br />
					solc: {'{'} <br />
					&emsp;optmizer: {'{'} <br />
					&emsp;&emsp;&emsp;enabled: true, <br />
					&emsp;&emsp;&emsp;runs: 200, <br />
					&emsp;&emsp;{'}'} <br />
					&emsp;{'}'} <br />
					{'}'}
				</Alert>
				<p>
					Agora vamos criar o código de migração do contrato para a rede, crie o seguinte arquivo:
				</p>
				<Alert variant='secondary'>
					$ sudo touch migrations/2_implantar_contrato.js
				</Alert>
				<p>
					Note que os arquivos dentro da pasta migrations são ordenado para ordem de execução, vamos por nesse aquivo nesse código:
				</p>
				<Alert variant='secondary'>
					const ListaDeTarefas = artifacts.require('./ListaDeTarefas.sol'); <br/>
					<br />
					module.exports = function(implatador) {'{'}<br />
					&emsp;implatador.deploy(ListaDeTarefas);<br />
					{'}'};
				</Alert>
				<p>
					Primeiro, nos vamos pegar o contrato e colocamos na constante 'ListaDeTarefas'.
					Depois nos adicionamos a manifestação para o truffle implantar na rede blockchain.
					Agora vamos migrar, entre no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle migrate
				</Alert>
			<p>
				Agora nos implantamos com sucesso o smart contract para nossa rede blockchain pessoal. Agora vamos acessar o termina do truffle e ver algumas informações do nosso contrato.
			</p>
				<Alert variant='secondary'>
					$ sudo truffle console<br />
					contrato = await ListaDeTarefas.deployed()<br />
					contrato.address<br />
					// => '0xABC123...'<br />
					contagemDeTarefas = await contrato.contagemDeTarefas()<br />
					// => 0
				</Alert>
				<p>
					Parabéns! Nos terminamos a primeira parte do nosso tutorial!
				</p>
				<p>
					Nos criamos até agora:
				</p>
				<ul>
					<li>Configuramos sua maquina para desenvolvimento Blockchain</li>
					<li>Criamos um novo projeto Truffle</li>
					<li>Criamos nosso primeiro smart contract</li>
					<li>Interagimos com nosso novo contrato na rede Blockchain</li>
				</ul>
			</div>
			<div id='tutorialContratoInteligente'>
				<h3>Contrato Inteligente</h3>
				<p>
					Vamos agora atualizar nosso contrato para controlar nossa aplicação, vamos alterar nosso contrato assim:
				</p>
				<Alert variant='secondary'>
					pragma solidity ^0.5.0;
					<br />
					<br />
					contract ListaDeTarefas {'{'}
					<br />
					&emsp;uint public contagemDeTarefas = 0;
					<br />
					&emsp;struct Tarefa {'{'} <br />
					&emsp;&emsp;uint id; <br />
					&emsp;&emsp;string conteudo; <br />
					&emsp;&emsp;bool completada; <br />
					&emsp;{'}'} <br />
					<br />
					&emsp;mapping(uint => Tarefa) public tarefas;<br />
					<br />
					&emsp;function criarTarefa(string memory _conteudo) public {'{'}<br />
					&emsp;&emsp;contagemDeTarefas ++;<br />
					&emsp;&emsp;tarefas[contagemDeTarefas] = Tarefa(contagemDeTarefas, _conteudo, false);<br />
					&emsp;{'}'} <br />
					<br />
					&emsp;constructor() public {'{'}<br />
					&emsp;&emsp;criarTarefa('Acesse programadorblockchain.com.br');<br />
					&emsp;&emsp;criarTarefa('Criar aplicação web para acessar nosso contrato'); <br />
					&emsp;{'}'} <br />
					<br />
					&emsp;function alternarCompletada(uint _id) public {'{'}<br />
					&emsp;&emsp;Tarefa memory _tarefa = tarefas[_id];<br />
					&emsp;&emsp;_tarefa.completada = !_tarefa.completada;<br />
					&emsp;&emsp;tarefas[_id] = _tarefa;<br />
					&emsp;{'}'} <br />
					{'}'}
				</Alert>
				<p>
					Agora vamos entender os passos desse contrato:
				</p>
				<ul>
					<li>struct Tarefa - Modelamos como vamos amarzena nossa tarefa na rede blockchain</li>
					<li>uint id - O 'id' é o identificador da tarefa, e 'uint' significa 'unsigned integer' ou seja somente valores positivos</li>
					<li>string conteudo - Contém a informação da tarefa</li>
					<li>bool completada - Variável com apenas dois valores, true ou false, verdadeiro ou falso</li>
					<li>mapping - O mapeamento server para podermos acessar a lista de tarefas de fora do contrato, no caso mapeamos a identificação da tarefa a variável tarefas</li>
					<li>function criarTarefa(string memory _conteudo) public - Essa função recebe um argumento chamado '_conteudo' e especificamos que será um texto, 'string', e armazernar na memória, memory, e a palavra chave 'public' para ser acessada fora</li>
					<li>contagemDeTarefas ++; - Incrementamos o número total de tarefas</li>
					<li>tarefas[contagemDeTarefas] - Tarefa(contagemDeTarefas, _conteudo, false); - Colocamos na lista 'tarefas' na posição 'contagemDeTarefas' um novo objeto aparitr do medelo 'Tarefa', onde os agumentos são correspondentes aos campos no modelo</li>
					<li>constructor() public - Ao migrar o contrato esse metódo é chamado e no caso criamos duas tarefas iniciais</li>
					<li>function alternarCompletada(uint _id) public - Funcção publica para podermos alternar se a tarefa foi concluída</li>
				</ul>
				<p>
					Agora vamos implantar esse novo contrato. Nos vamos implantar uma nova cópia nosso código.
					Lembre-se smart contract são imutáveis. Não podem ser alterados.
					Nos podemos sempre criar um novo contrato. Truffle facilita nosso processo nisso.
					Entre no terminal:
				</p>
				<Alert vaiant='secondary'>
					$ sudo truffle migrate --reset
				</Alert>
				<p>
					E pronto novo contrato no ar. Agora vamos acessar o terminal do Truffle e ver as tarefas na Blockchain.
				</p>
				<Alert variant='secondary'>
					$ sudo truffle console<br />
					contrato = await ListaDeTarefas.deployed()<br />
					tarefaUm = contrato.tarefas(1)<br />
					tarefaDois = contrato.tarefas(2)<br />
					contrato.alternarCompletada(1)<br />
					tarefaUm = contrato.tarefas(1)<br />
					contrato.criarTarefa('Teste de cadsatro')<br />
					tarefaTres = contrato.tarefas(3)<br />
				</Alert>
				<p>
					Pronto terminamos nosso contrato agora vamos para aplicação web com React.
				</p>
			</div>
			<div id='tutorialAplicacaoWebComReact'>
				<h3>Aplicação Web com React</h3>
				<p>
					Ao criarmos a aplicação com 'create-react-app', ele já gera tudo necessário para desenvolvermos uma aplicação web.
					Abra um novo terminal, vamos instalar a bliblioteca para o JavaScript poder acessar a blockchain e inicializar o servidor de desenvolvimento, entre no terminal:
				</p>
				<Alert variant='secondary'>
					<p>
						$ sudo npm install web3 react-bootstrap bootstrap --save
					</p>
					<p>
						$ sudo npm start
					</p>
				</Alert>
				<p>
					No terminal vai mostra como acessar, abra o navegador e acesse 'localhost:3000', pronto nosso servidor já esta funcionando.
					Vamos configurar nossa conta e acessar nossa rede Blockchain com o <b>Metamask</b>.
					Acesse o <b>Ganache</b>, acesse a aba 'accounts' e clique no icone de chave ao lado direitor de alguma das contas e copie o código da chave privada, como na imagem:
				</p>
				<Image src='imagens/5-ganache.png' rounded fluid/>
				<br />
				<br />
				<Image src='imagens/6-ganache.png' rounded fluid/>
				<br />
				<br />
				<p>
					Clique no icone de raposa no canto superior direito do seu navegador google.
					Clique no icone da conta e depois 'importar conta' depois informe a chave privada copiada.
					Agorava vamos acessar a nossa Blockchain com essa conta, clique em redes depois 'RPC Personalizada', em nome coloque 'blockchain ganache' e em Nova URL RPC
					coloque 'http://127.0.0.1:7545', salve e pronto deve aparecer uma quantidade de Ether.
					Agora abra o arquivo 'src/App.js', apague o conteudo e adicione o seguinte:
				</p>

				<Highlight language='javascript'> 
					/* Biblioteca para criar nossos componentes */<br />
					import React from 'react';<br />
					/* Biblioteca para acessar contratos na rede Ethereum */<br />
					import Web3 from 'web3';<br />
					/* Importando o contrato */<br />
					import ListaDeTarefas from './abis/ListaDeTarefas.json'<br />
					/* Componentes para nossa aplicação web */<br />
					&emsp;import {'{'}<br />
					&emsp;Table,<br />
					&emsp;Container,<br />
					&emsp;Form,<br />
					&emsp;Button,<br />
					&emsp;InputGroup,<br />
					&emsp;FormControl,<br />
					{'}'} from 'react-bootstrap'<br />
					<br />
					/* Declaração do nosso componente */<br />
					class App extends React.Component {'{'}<br />
				<br />
					/* Alguns componentes React tem um 'estado', com dados, <br />
					* para controlar a renderização do componente */<br />
					state = {'{'}<br />
					&emsp;/* Variável para manejar o processamento dos dados */<br />
					&emsp;carregando{':'} true,<br />
					&emsp;/* Variável para guardar a lista de tarefas dentro do contrato */<br />
					&emsp;tarefas{':'} [],<br />
					&emsp;/* Variável para guardar a conta que está selecionada no Metamask */<br />
					&emsp;conta{':'} null,<br />
					&emsp;/* Variável para receber o conteúdo da nova tarefa */<br />
					&emsp;novoConteudo{':'} '',<br />
					&emsp;/* Variável para guardar o contrato que vamos utilizar */<br />
					&emsp;contrato{':'} null,<br />
					{'}'}<br />
					<br />
					/* Função que participa do ciclo de vida do componente com estado,<br />
					* ela é chamada quando o componente está montado, essa no caso é<br />
					* ideal para fazer solicitações assíncronas, palavra chave 'async' <br />
					* facilita o trabalho com funções assíncronas, fazendo parte da ES7<br />
					* do JavaScript */<br />
					async componentDidMount() {'{'}<br />
					/* Todas as solicitações Web3 são assíncronas e o uso do ES7 async await<br />
					* ajuda muito a reduzir o código e facilita a manutenção */<br />
					<br />
					/* Criando uma instância do Web3 */<br />
					&emsp;let web3 = null<br />
					&emsp;/* Browser novos já tem acesso a rede Ethereum, como Mist ou Metamask */<br />
					&emsp;if(window.ethereum){'{'}<br />
					&emsp;&emsp;web3 = new Web3(window.ethereum)<br />
					&emsp;&emsp;await window.ethereum.enable()<br />
					&emsp;{'}'}else{'{'}<br />
					&emsp;&emsp;/* Acessando a extensão de acesso a rede Ethereum */<br />
					&emsp;&emsp;if(window.web3){'{'}<br />
					&emsp;&emsp;&emsp;web3 = new Web3(Web3.givenProvider)<br />
					&emsp;&emsp;{'}'}else{'{'}<br />
					&emsp;&emsp;&emsp;alert('Ethereum browser não detectado! Tente usar o Metamask')<br />
					&emsp;&emsp;&emsp;return false<br />
					&emsp;&emsp;{'}'}<br />
					&emsp;{'}'}<br />
					<br />
					&emsp;/* Pega as contas que estão no caso no Metamask e traz a selecionada */<br />
				&emsp;const contas = await web3.eth.getAccounts()<br />
					&emsp;const conta = contas[0]<br />
					&emsp;/* Dados da rede que estamo conecta no caso a rede Ganache */<br />
					&emsp;const rede_id = await web3.eth.net.getId()<br />
					&emsp;const dadosRede = ListaDeTarefas.networks[rede_id]<br />
					&emsp;if(dadosRede){'{'}<br />
					&emsp;&emsp;/* Pegando o contrato com o arquivo gerado pelo Truffle e o endereço da nossa rede */<br />
					&emsp;&emsp;const contratoListaDeTarefas = new web3.eth.Contract(ListaDeTarefas.abi, dadosRede.address)<br />
					&emsp;&emsp;/* buscando as tarefas dentro do contrato */<br />
					&emsp;&emsp;const tarefas = await this.buscarTarefas(contratoListaDeTarefas)<br />
					&emsp;&emsp;/* A função setState() alterar o estado do objeto, quando o estado é diferente do atual <br />
					&emsp;&emsp;* o algoritmo de reconciliciação do React avalia o que vai mudar na redenrização e altera<br />
					&emsp;&emsp;* apenas aquela informação, esse é o que faz O react tão diferente e poderoso */<br />
					&emsp;&emsp;this.setState({'{'}<br />
					&emsp;&emsp;&emsp;carregando{':'} false,<br />
					&emsp;&emsp;&emsp;tarefas,<br />
				&emsp;&emsp;&emsp;contrato{':'} contratoListaDeTarefas,<br />
					&emsp;&emsp;&emsp;conta,<br />
					&emsp;&emsp;{'}'})<br />
					&emsp;&emsp;{'}'}else{'{'}<br />
					&emsp;&emsp;&emsp;alert('Contrato ListaDeTarefas não está implementado!')<br />
					&emsp;&emsp;{'}'}<br />
					&emsp;{'}'}<br />
					<br />
					&emsp;/* No React podemos controlar nosso formulário para não ter a necessidade de submeter o mesmo,<br />
					&emsp;* além de poder filtrar os dados passado pela entrada de dados e quem altera o que é mostrado <br />
					&emsp;* é o algoritmo de reconciliação */<br />
					&emsp;alterarCampo = event => {'{'}<br />
					&emsp;&emsp;/* Desestruturação do objeto para por os dados já em variáveis utilizad pelo ES6*/<br />
				&emsp;&emsp;const {'{'}<br />
					&emsp;&emsp;&emsp;value,<br />
					&emsp;&emsp;&emsp;name,<br />
					&emsp;&emsp;{'}'} = event.target<br />
					&emsp;&emsp;this.setState({'{'} [name]: value {'}'})<br />
					&emsp;{'}'}<br />
					<br />
					&emsp;criarTarefa = async () => {'{'}<br />
					&emsp;&emsp;const {'{'}<br />
					&emsp;&emsp;&emsp;contrato,<br />
					&emsp;&emsp;&emsp;novoConteudo,<br />
				&emsp;&emsp;&emsp;conta,<br />
					&emsp;&emsp;{'}'} = this.state<br />
					&emsp;if(novoConteudo === ''){'{'}<br />
					&emsp;&emsp;alert('Informe o conteúdo')<br />
					&emsp;&emsp;return false<br />
					&emsp;{'}'}<br />
					&emsp;try{'{'}<br />
					&emsp;&emsp;this.setState({'{'}carregando{':'} true{'}'})<br />
					&emsp;&emsp;/* Acesso aos métodos públicos do contrato, quando um método altera o estado<br />
					&emsp;&emsp;* do contrato usa-se o método 'send' com a conta do usuário selecionado <br />
				&emsp;&emsp;* no Metamask além de usar 'Gas Fee', seria como a taxa de processamento,<br />
					&emsp;&emsp;* como por exemplo quando você faz uma compra na internet além do valor do<br />
					&emsp;&emsp;* produto paga-se a taxa de entrega que também é paga em valor por isso,<br />
					&emsp;&emsp;* na rede Ethereum a moeda é o Ether e o Gas seria uma fração de Ether,<br />
					&emsp;&emsp;* essa taxa é paga para quem faz o processamento, chamado de mineradores,<br />
					&emsp;&emsp;* ao chamar essa função um notificação do MetaMask mostra-rá os valores e<br />
					&emsp;&emsp;* se você aceita essa transação ou não */<br />
					<br />
					&emsp;&emsp;&emsp;await contrato.methods.criarTarefa(novoConteudo).send({'{'}from{':'} conta{'}'})<br />
						&emsp;&emsp;&emsp;/* Logo depois de criar uma nova tarefa, buscar as tarefas do contrao e<br />
					&emsp;&emsp;&emsp;* submetido ao estado para que o React faça a alteração da renderização */<br />
					&emsp;&emsp;&emsp;const tarefas = await this.buscarTarefas(contrato)<br />
					&emsp;&emsp;&emsp;this.setState({'{'}<br />
					&emsp;&emsp;&emsp;&emsp;tarefas,<br />
					&emsp;&emsp;&emsp;&emsp;novoConteudo: '',<br />
					&emsp;&emsp;&emsp;&emsp;carregando{':'} false,<br />
					&emsp;&emsp;&emsp;{'}'})<br />
						&emsp;&emsp;{'}'} catch (error) {'{'}<br />
					&emsp;&emsp;/* Caso seja rejeitada a transação volta ao estado anterior */<br />
					&emsp;&emsp;this.setState({'{'}<br />
					&emsp;&emsp;&emsp;carregando{':'} false,<br />
					&emsp;&emsp;&emsp;novoConteudo{':'} '',<br />
					&emsp;&emsp;{'}'})<br />
					&emsp;&emsp;alert('Transação Rejeitada!')<br />
					&emsp;&emsp;{'}'}<br />
							&emsp;{'}'}<br />
					<br />
					&emsp;buscarTarefas = async (contrato) => {'{'}<br />
					&emsp;/* Como buscar tarefas que estão nos contratos não alterar o estado do mesmo,<br />
					&emsp;* então é usado a função 'call' */<br />
					&emsp;&emsp;const contagemDeTarefas = await contrato.methods.contagemDeTarefas().call()<br />
					&emsp;&emsp;const tarefas = []<br />
							&emsp;&emsp;for (let i = 1;i {'<='} contagemDeTarefas ; i++) {'{'}<br />
					&emsp;&emsp;&emsp;tarefas.push(await contrato.methods.tarefas(i).call())<br />
					&emsp;&emsp;{'}'}<br />
					&emsp;&emsp;return tarefas	<br />
					&emsp;{'}'}<br />
					<br />
					&emsp;alternarCompletada = async (id) => {'{'}<br />
							&emsp;&emsp;const {'{'}<br />
					&emsp;&emsp;&emsp;contrato,<br />
					&emsp;&emsp;&emsp;conta,<br />
					&emsp;&emsp;{'}'} = this.state<br />
					&emsp;&emsp;try{'{'}<br />
					&emsp;&emsp;&emsp;this.setState({'{'}carregando{':'} true{'}'})<br />
							&emsp;&emsp;&emsp;/* A mesma forma de uso como o método 'criarTarefa' */<br />
					&emsp;&emsp;&emsp;await contrato.methods.alternarCompletada(id).send({'{'}from{':'} conta{'}'})<br />
					&emsp;&emsp;&emsp;const tarefas = await this.buscarTarefas(contrato)<br />
					&emsp;&emsp;&emsp;this.setState({'{'}<br />
					&emsp;&emsp;&emsp;&emsp;tarefas,<br />
					&emsp;&emsp;&emsp;&emsp;carregando{':'} false,<br />
							&emsp;&emsp;&emsp;{'}'})<br />
					&emsp;&emsp;{'}'} catch (error) {'{'}<br />
					&emsp;&emsp;&emsp;this.setState({'{'}<br />
					&emsp;&emsp;&emsp;&emsp;carregando{':'} false,<br />
					&emsp;&emsp;&emsp;{'}'})<br />
					&emsp;&emsp;&emsp;alert('Transação Rejeitada!')<br />
						&emsp;&emsp;{'}'}<br />
					&emsp;{'}'}<br />
					<br />
					/* Função que informa ao React o que criar usando JSX, que facilita a criação<br />
					* de componentes que é justamente o uso de tags informa ao tradutor Babel para<br />
			* gerar um código Javascript ao executar a classe */<br />
					&emsp;render(){'{'}<br />
					&emsp;&emsp;const {'{'}<br />
					&emsp;&emsp;carregando,<br />
					&emsp;&emsp;tarefas,<br />
				&emsp;&emsp;novoConteudo,<br />
					&emsp;&emsp;contrato,<br />
					&emsp;{'}'} = this.state<br />
					&emsp;return (<br />
					&emsp;&emsp;{'<Container'}<br />
					&emsp;&emsp;&emsp;style={'{{'}<br />
					&emsp;&emsp;&emsp;textAlign{':'} 'center',<br />
					&emsp;&emsp;&emsp;borderWidth{':'} '.2rem .2rem 0',<br />
					&emsp;&emsp;&emsp;borderRadius{':'} '8px 8px 0 0',<br />
					&emsp;&emsp;&emsp;sition{':'} 'relative',<br />
					&emsp;&emsp;&emsp;padding{':'} '1rem',<br />
					&emsp;&emsp;&emsp;border{':'} '.2rem solid #ececec',<br />
					&emsp;&emsp;&emsp;color{':'} '#212529',<br />
					&emsp;&emsp;&emsp;marginTop{':'} 20,<br />
					&emsp;&emsp;{'}}'}><br />
					&emsp;&emsp;&emsp;{'<h1>Lista de Tarefas na Blockchain</h1>'}<br />
					&emsp;&emsp;&emsp;{'{'}<br />
					&emsp;&emsp;&emsp;&emsp;contrato && <br />
					&emsp;&emsp;&emsp;&emsp;!carregando && <br />
					&emsp;&emsp;&emsp;&emsp;{'<Form>'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;{'<Form.Group>'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<Form.Label>Adicionar Nova Tarefa</Form.Label>'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<InputGroup className="mb-3">'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<FormControl'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;placeholder="Novo Conteúdo"<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id='novoConteudo'<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name='novoConteudo'<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value={'{'}novoConteudo{'}'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;onChange={'{'}this.alterarCampo{'}'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;/><br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<InputGroup.Append>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<Button '}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;onClick={'{'}this.criarTarefa{'}'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'variant="outline-secondary">'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Criar nova Tarefa<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'</Button>'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'</InputGroup.Append>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;{'</InputGroup>'}<br />
				&emsp;&emsp;&emsp;&emsp;{'</Form.Group>'}<br />
				&emsp;&emsp;&emsp;{'</Form>'}<br />
					&emsp;&emsp;{'}'}<br />
				&emsp;&emsp;{'{'}<br />
				&emsp;&emsp;&emsp;carregando &&<br />
				&emsp;&emsp;&emsp;{'<h2>Carregando...</h2>'}<br />
					&emsp;&emsp;{'}'}<br />
				&emsp;&emsp;{'{'}<br />
				&emsp;&emsp;&emsp;!carregando &&<br />
				&emsp;&emsp;&emsp;tarefas &&<br />
					&emsp;&emsp;&emsp;{'<Table striped bordered hover>'}<br />
				&emsp;&emsp;&emsp;&emsp;{'<tbody>'}<br />
				&emsp;&emsp;&emsp;&emsp;{'{'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;tarefas.map(tarefa => {'{'}<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'return <tr key=tarefa.id>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<td>tarefa.conteudo</td>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<td>'}<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<input'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type='checkbox'<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;defaultChecked={'{'}tarefa.completada{'}'}<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;onClick={'{'}() => this.alternarCompletada(parseInt(tarefa.id)){'}'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'/>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'</td>'}<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'</tr>'}<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'}'})<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;{'}'}<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;{'</tbody>'}<br />
				&emsp;&emsp;&emsp;&emsp;{'</Table>'}<br />
				&emsp;&emsp;&emsp;{'}'}<br />
					&emsp;&emsp;&emsp;{'</Container>'}<br />
				&emsp;&emsp;);<br />
				&emsp;{'}'}<br />
				{'}'}<br />
				<br />
				export default App;<br />
				</Highlight>

				<p>
					Parabéns já conseguimos listar, cadastrar e completar tarefas direto do nossa Blockchain, quando tentamos criar ou completaruma tarefa um notificação do MetaMask vai aparecer pegruntando se concordamos com a transação assim como o consumo de 'Gas', uma fração de Ether para pagar os 'mineradores'.
				</p>
					<p>
						Algumas ponderações, já devem ter reparado que todas vez que migramos um contrato gastamos <b>Gas</b> e que os contratos são imutaveis então caso haja um erro no contrato teremos que subir um novo e gastar mais 'Gas', vamos criar um teste para validar nosso contrato.
					</p>
			</div>
				<div id='tutorialTestandoOContrato'>
					<h3>Testando o Contrato</h3>
					<p>
						Então vamos criar um <b>Teste</b> para não gastar tanto Ether. O Truffle já tem o necessário para podermos testar, vamos escrever os teste em JavaScript.
					</p>
					<p>
						Crie um diretório test/ na raiz do projeto e um arquivo chamado 'ListaDeTarefas.test.js':
					</p>
					<Alert variant='secondary'>
						$ sudo mkdir test<br />
						$ sudo touch test/ListaDeTarefas.test.js
					</Alert>
					<p>
						Insira esse código:
					</p>
					<Alert variant='secondary'>
						const ListaDeTarefas = artifacts.require('./src/contracts/ListaDeTarefas.sol'); <br/>
						<br />
						contract('ListaDeTarefas', (contas) => {'{'}<br />
						&emsp;before(async () => {'{'}<br />
						&emsp;&emsp;this.listaDeTarefas = await ListaDeTarefas.deployed()<br />
						&emsp;{'}'})<br />
						<br />
						&emsp;it('implementado com sucesso', async () => {'{'}<br />
						&emsp;&emsp;const endereco = await this.listaDeTarefas.address<br />
						&emsp;&emsp;assert.notEqual(endereco, 0x0)<br />
						&emsp;&emsp;assert.notEqual(endereco, '')<br />
						&emsp;&emsp;assert.notEqual(endereco, null)<br />
						&emsp;&emsp;assert.notEqual(endereco, undefined)<br />
						&emsp;{'}'})<br />
						<br />
						&emsp;it('Lista de tarefas', async () => {'{'}<br />
						&emsp;&emsp;const contagemDeTarefas = await this.listaDeTarefas.contagemDeTarefas()<br />
						&emsp;&emsp;const tarefaUm = await this.listaDeTarefas.tarefas(1)<br />
						&emsp;&emsp;assert.equal(tarefaUm.id.toNumber(), 1)<br />
						&emsp;&emsp;assert.equal(tarefaUm.conteudo, 'Acesse programadorblockchain.com.br')<br />
						&emsp;&emsp;assert.equal(tarefaUm.completada, false)<br />
						&emsp;&emsp;const tarefaDois = await this.listaDeTarefas.tarefas(2)<br />
						&emsp;&emsp;assert.equal(tarefaDois.id.toNumber(), 2)<br />
						&emsp;&emsp;assert.equal(tarefaDois.conteudo, 'Criar aplicação web para acessar nosso contrato')<br />
						&emsp;&emsp;assert.equal(tarefaDois.completada, false)<br />
						&emsp;&emsp;assert.equal(contagemDeTarefas.toNumber(), 2)<br />
						&emsp;{'}'})<br />
						<br />
						&emsp;it('Criar uma nova tarefa', async () => {'{'}<br />
						&emsp;&emsp;await this.listaDeTarefas.criarTarefa('Nova Tarefa')<br />
						&emsp;&emsp;const contagemDeTarefas = await this.listaDeTarefas.contagemDeTarefas()<br />
						&emsp;&emsp;assert.equal(contagemDeTarefas.toNumber(), 3)<br />
						&emsp;&emsp;const tarefaTres = await this.listaDeTarefas.tarefas(3)<br />
						&emsp;&emsp;assert.equal(tarefaTres.id.toNumber(), 3)<br />
						&emsp;&emsp;assert.equal(tarefaTres.conteudo, 'Nova Tarefa')<br />
						&emsp;&emsp;assert.equal(tarefaTres.completada, false)<br />
						&emsp;{'}'})<br />
						<br />
						&emsp;it('Alternar tarefa completada', async () => {'{'}<br />
						&emsp;&emsp;await this.listaDeTarefas.alternarCompletada(1)<br />
						&emsp;&emsp;const tarefaUm = await this.listaDeTarefas.tarefas(1)<br />
						&emsp;&emsp;assert.equal(tarefaUm.completada, true)<br />
						&emsp;{'}'})<br />
						{'}'})
					</Alert>
					<p>
						Deixe explicar o código. Primeiro pegamos o contrato e colocamos numa constante, como no arquivo de migração.
						Depois nos chamamos a função 'contract' e escrevemos tudo o que queremos testar.
						Primeiro testamos se foi implmentado na rede e depois se os valores padrões estão lá.
						Vamos testar:
					</p>
					<Alert variant='secondary'>
						$ sudo truffle test
					</Alert>
					<p>
						Parabéns. Concluímos nosso tutorial, criamos uma aplicação blockchain completa alimentada por Smart Contract da Ethereum! 
						Você pode baixar o projeto completo <a href='https://github.com/harpia-br/tutorial-lista-de-tarefas' target='_blanck'>aqui</a>!
					</p>
				</div>
				<div id='tutorialConsideracoesFinaos'>
					<h3>Considerações Finais</h3>
					<p>
						Nesse tutorial vemos o básico de transações com smart contrato mas se em vez de uma lista de tarefas fosse uma lista de produtos a venda, 
						usado Ether, nosso próximo tutorial faremos uma loja com smart contratos, mas a lógica é a mesma o que mudará será nosso contrato.
						Até a Próxima!
					</p>
				</div>
		</>
	},
]

function tutoriais(state = estadoTutoriais, action){
	switch(action.type){
		case PEGAR_TUTORIAIS:
			return [...action.elementos]
		default:
			return state
	}
}

export default combineReducers({
	tutoriais,
})
