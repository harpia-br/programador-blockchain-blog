import React from 'react';
import { 
	Navbar, 
	Nav, 
} from 'react-bootstrap';
import {
	Container,
	Row,
	Col,
	Image,
	Alert,
} from 'react-bootstrap';
import {
	Route,
	Switch,
	withRouter,
} from 'react-router-dom';
import {
	Jumbotron,
	Button,
} from 'react-bootstrap';
import {
	Link,
} from 'react-router-dom'

function App() {
	return (
		<div>
			<Topo />
			<Switch>
				<Route exact path='/' component={Conteudo} />
				<Route exact path={`/:tutorial`} component={Tutorial} />
				<Route component={Pagina404} />
			</Switch>
			<Rodape />
		</div>
	);
}

export default withRouter(App);

const Topo = () => {
	return 	<Navbar bg='dark' variant='dark' expand="lg">
		<Nav.Link href="/">
			<Navbar.Brand href="">Programador Blockchain</Navbar.Brand>
		</Nav.Link>
	</Navbar>
}

const Navegacao = () => {
	return <>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className='mr-auto'>
				<Nav.Link href="/tutoriais">
					Tutoriais
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
		</>
}

const Conteudo = () => {
	const tutorial_id = 'construaSuaAplicacaoBlockchain'
	return <Container style={{ paddingTop: 20, marginBottom: 100, }}>
		<div style={{ marginBottom: 30, }}>
			<h2>
				<Link to={`/${tutorial_id}`}>
					Contrua Sua Primeira Aplicação Blockchain
				</Link>
			</h2>
			<Row>
				<Col sm={12} xs={12} md={12} lg={6}>
					<ImagemTutorial />
				</Col>
				<Col sm={12} xs={12} md={12} lg={6} style={{ fontSize: 18, fontFamily: 'Verdana', }}>
					<MinhaChamada />
					&nbsp;
					<ChamadaTutorial />
					<br />
					<br />
					<Link to={`/${tutorial_id}`}>
						Comece a aprender Blockchain agora! >>
					</Link>
				</Col>
			</Row>
		</div>
	</Container>
}

const Tutorial = (props) => {
	const tutorial = props.match.params.tutorial

	return <>
		<Container
			style={{
				maxWidth: '650px',
				minHeight: '500px',
				paddingTop: '20px',
				paddingBottom: '20px',
			}}
			className='pl-4 pr-4'>
			<h1 style={{ fontFamily: 'Roboto Condensed, sans-serif', }}>
				Como Construir uma Aplicação Blockchain com Ethereum, Web3.js e Solidity Smart Contracts
			</h1>
			<p className='text-muted'>
				Por Léo Pereira - 02 de Fevereiro, 2020
			</p>
			<div className='descricao'>
				<MinhaChamada />
				<br />
				<br />
				<ChamadaTutorial />
				<br />
				<br />
				<ImagemTutorial />

				<div id='introducao'>
					Se você já conhece o básico, pode avançar e começar a codificar o aplicativo agora!
				</div>

				<div id='tabelaDeConteudos'>
					<h2>Tabela de Conteúdo</h2>
					<ul>
						<li>Introdução</li>
						<ul>
							<li><a href='#tutorialOQueNosVamosContruir'>O que nos vamos contruir?</a></li>
							<li><a href='#tutorialOQueEBlockchain'>O que é Blockchain?</a></li>
							<li><a href='#tutorialOQueEUmSmartContract'>O que é um Smart Contract?</a></li>
							<li><a href='#tutorialComoNossoBlockchainVaiFuncionar'>Como nosso Blockchain vai funcionar?</a></li>
						</ul>
						<li>Passo a Passo</li>
						<ul>
							<li><a href='#tutorialInstalandoDependencias'>Instalando Dependências</a></li>
							<li><a href='#tutorialConfigurandoOProjeto'>Configurando o Projeto</a></li>
							<li><a href='#tutorialListaDeTarefas'>Lista de Tarefas</a></li>
							<li><a href='#tutorialCriandoTarefas'>Criando Tarefas</a></li>
							<li><a href='#tutorialCompletandoTarefas'>Completando Tarefas</a></li>
						</ul>
					</ul>
				</div>

				<div id='conteudoOQueNosVamosContruir'>
					<h3>O que vamos construir?</h3>
					<p>
						Eu escolhi uma aplicação de lista de tarefas para esse tutorial por causa que o meio mais rápido de <b>aprender uma nova tecnologia</b> é fazendo.
						Eu vou te ensina como ler e escrever dados na blockchain, assim como a lógica de negócio que vai controla o comportamento da nossa aplicação. 
						Assim como também ensinar os fundamentos de como a <b>Blockchain</b> funciona e como escrever <b>Smart Contracts Ethereum</b>.
					</p>
				</div>

				<div id='tutorialOQueEBlockchain'>
					<h3>O que é Blockchain?</h3>
					<p>
						Para entendermos como funciona Blockchain primeiro precisamos enteder como funcionam as aplicações hoje.
						Quando entramos nun site para acessar nossa lista de tarefas usamos um Browser para se conectar a um Servidor Web na Internet.
						O servidor contém todo o código e dados da nossa aplicação. Qualquer um com acesso ao servidor pode alterar qualquer parte do código ou os dados.
						Em Blockchain todo o código e dados está distribuído pela rede e é inalteravel. Para acessar sua aplicação da lista de tarefas em vez de falar com
						o servidor web, você conversa diretamente com a rede do blockchain.
					</p>
					<p>
						O Blockchain é uma rede de computadores (peer ou node) onde cada um está conectado com todos e todos são responsáveis por manter funcionado a rede.
						Cada participante mantém uma copia do código e dados da rede. Esses dados são agrupados em blocos (block em inglês) e acorrentados (chain em inglês)
						para montar a Blockchain. Todos os computadores da rede em o dever de manter os dados seguros e inalteráveis, enquanto que numa aplicação centralizada os dados
						podém ser alterados a qualquer tempo. Isso que faz o Blockchain tão poderoso!
						&nbsp;<b>Blockchain é uma forma diferente de controlar e armazenar os dados mais efeciente e segura.</b>
						&nbsp;Você não é um usuário de uma aplicação mas usuário de Blockchain. A aplicação não administra os dados mas sim a Blockchain!
					</p>
				</div>

				<div id='tutorialOQueEUmSmartContract'>
					<h3>O que é um Smart Contract?</h3>
					<p>
						Todo código na Blockchain é um smart contract. São eles que constroem os blocos de dados. Nos vamos escrever um smart contract para alimentar nossa lista de tarefas.
						Ele será responsável lista, criar e completar nossas tarefas na aplicação.
					</p>
					<p>
						<b>Smart Contracts em Ethereum são escrito na linguagem Solidity</b>, todo o código dele é imutável. Depois que for posto na rede Blockchain não pode ser alterado nada do código,
						é feito dessa maneira para que seja seguro. Ele age como intermediário para ler e escrever dados na Blockchain, assim como executar a lógica do negócio, eles são públicos, significa que qualquer um pode acessa esse intermediário.
					</p>
				</div>

				<div id='tutorialComoNossoBlockchainVaiFuncionar'>
					<h3>Como nosso Blockchain vai funcionar?</h3>
					<p>
						Nos vamos criar uma <b>aplicação web</b> de lista de tarefas que falará diretamente com a Blockchain. 
						Nos vamos usar a <b>Ethereum Blockchain</b> nesse tutorial, criaremos um <b>smart contract em Solidity</b> que alimetará a lista de tarefas e implantaremos na blockchain.
						Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para iteragir com nossa lista de tarefas.
					</p>
				</div>

				<div id='tutorialInstalandoDependencias'>
					<h3>Instalando Dependências</h3>
					<p>
						Agora vamos instalar todas as dependências que precisaremos para construir nosso projeto.
						Primeiro, vamos configurar um blockchain pessoal para desenvolvimento local.
					</p>
					<h4>Ganache Blockchain Ethereum Pessoal</h4>
					<p>
						O <a href=''>Ganache</a> simula o comportamento da blockchain pública. Permite implantar smart contracts, desenvolver aplicações e rodar testes. 
						Está diponível para Windows, Mac, Linux como uma aplicação desktop ou por linha de comando
					</p>
					<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>
					<p>
						Você pode encontrar a ultima versão do software para seu sistema operacional <a href='https://github.com/trufflesuite/ganache/releases' target='_blanck'>clique aqui</a>.
						Uma vez baixado o arquivo compactado, extraia o instalado e rode atraves dos passo de configuração. 
						Quando terminar e abrir terá uma página parecida como essa:
					</p>
					<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>
					<p>
						Pronto agora temos uma rede blockchain pessoal rodando!
						Sem o Ganache teriamos que criar uma rede do zero ou testa na rede pública, além de criar contas e carteiras e colocar crédito em cada uma delas.
					</p>
					<h4>Node.JS</h4>
					<p>
						Agora que temos nossa rede Blockchain rodando, você precisa configurar o ambiente para  desenvolver os smart contracts.
						Vamos precisar de um gerenciador de pacotes no caso usaremos o <a href='https://nodejs.org/pt-br' target='_blanck'>Node Package Manager ou NPM</a>, que já vem com o Node.JS.
						Você pode ver se já esta instalado digitando no seu terminal:
					</p>
					<Alert variant='secondary'>
						$ node -v
					</Alert>
					<p>
						Se você não tem o Node.JS já instalado você pode visitar o <a href='https://nodejs.org/pt-br' target='_blanck'>Node.js website</a> para baixar ele.
					</p>
					<h4>Truffle</h4>
					<p>
						Agora vamos instalar o <a href='https://truffle.com' target='_blanck'>Truffle</a>, que providencia as ferramentas necessárias para desenvolver smart contract em Ethereum na linguagem de programação Solidity.
					</p>
					<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>
					<p>Aqui um visão geral com algumas as funcionalidade do Truffle:</p>
					<ul>
						<li>
							Gerenciamento de Smart Contracts - escrever e compilar (transformar em liguagem de maquina) para rodar na <b>Maquina Virtual Ethereum (EVM)</b>.
						</li>
						<li>
							Teste Automatizados - escrever teste para os smart contracts
						</li>
						<li>
							Implantar e Migrar - escrever código para migrar e implantar smart contracts para alguma rede Blockchain Ethereum.
						</li>
						<li>
							Administração de Rede - permite se conectar a rede publica e privada da Blockchain Ethereum
						</li>
					</ul>
					<p>
						Você pode instalar o Truffle com o NPM na linha de comandos.
						Instale a versão especificada para esse tutorial.
					</p>
					<Alert variant='secondary'>
						$ sudo npm install -g truffle@5.0.2
					</Alert>
					<h4>Carteira Ethereum Metamask</h4>
					<p>
						Agora vamos transformar seu browser em um browser blockchain.
						A maioria dos browsers não estão conectados as redes blockchain, para isso vamos instalar uma extensão que permite isso.
					</p>
					<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>
					<p>
						Para instalar o <b>Metamask</b>, <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=pt-br' target='_blanck'>visite esse link</a> ou procure por Metamask Chrome plugin na loja web do Google Chrome. Quando instalado você verá um icone de raposa no topo direito.
					</p>
					<p>
						Metamask também permite administrar sua conta pessoal e seu fundos Ether (moeda digital da rede Ethereum) pque são necessários para pagar as transações.
					</p>
				</div>
				<div id='tutorialConfigurandoOProjeto'>
					<h3>Configurando o Projeto</h3>
					<p>
						Vamos criar um projeto. Primeiro criar um diretório, entre no terminal:
					</p>
					<Alert variant='secondary'>
						<p>
							$ sudo mkdir lista-de-tarefas
						</p>
						<p>
							$ cd lista-de-tarefas
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
						Seu terminal vai mostrar que o projeto foi criado com sucesso. Ele criou os diretórios contracts e migrations que vamos utilizar. Agora vamos inicializar o projeto JavaScript, entre no terminal e reponsa as perguntas com seus dados:
					</p>
					<Alert variant='secondary'>
						<p>
							$ sudo npm init
						</p>
						<p>
							$ sudo npm install truffle truffle-contract --save
						</p>
					</Alert>
					<p>
						Vamos começar a desenvolver o smart contract que vai administrar a lista de tarefas. Crie um arquivo novo com extensão 'sol':
					</p>
					<Alert variant='secondary'>
						$ sudo touch contracts/ListaDeTarefas.sol
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
						Parabéns! Você escreveu seu primeiro <b>smart contract Ethereum</b>. Um novo arquivo foi gerado './build/contracts/ListaDeTarefas.json'. 
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
						&emsp;{'}'} <br />
						solc: {'{'} <br />
						&emsp;optmizer: {'{'} <br />
						&emsp;&emsp;&emsp;enabled: true, <br />
						&emsp;&emsp;&emsp;runs: 200, <br />
						&emsp;&emsp;{'}'} <br />
						&emsp;{'}'} <br />
						{'}'}
					</Alert>
					<p>
						Agora vamos criar o código de migração do contrato para a rede:
					</p>
					<Alert variant='secondary'>
						$ sudo touch 2_migrations/implantar_contratos.js
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
						Agora nos implantamos com sucesso o smadt contract para nossa rede blockchain pessoal. Agora vamos acessar o termina do truffle e ver algumas informações do nosso contrato.
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
					<h3>Lista de Tarefas</h3>
					<p>
						Vamos agora começar a listar nossas tarefas, vamos primeiro alterar nosso contrato, assim:
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
						<li>function criarTarefa - Essa função recebe um argumento chamado '_conteudo' e especificamos que será um texto, 'string', e armazernar na memória, memory</li>
					</ul>
				</div>
			</div>
		</Container>
		</>
}

const MinhaChamada = () => {
	return <span> 
		Fala programador, aqui é o <a href='https://instagram.com/programador_blockchain' target='_blanck'><b>Léo do Programador Blockchain!</b></a> 
	</span>
}

const ChamadaTutorial = () => {
	return <span>
		Estou aqui para te mostrar como criar sua primeira aplicação blockchain com <b>Ehtereum</b>, <b>Web3.js</b> e <b>Solidity smart contracts</b>. 
		Você não precisa saber nada sobre blockchain para seguir. Eu vou ensinar do zero. Use esse guia passo a passo com exemplo de códigos
		e instruções escritas para começar sua jornada como desenvolvedor Blockchain!
	</span>
}

const ImagemTutorial = () => 
	<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>

const Pagina404 = () => {
	return <Jumbotron>
		<h1>Página não encontrada!</h1>
		<Link to='/'>
			<Button size='sm' style={{ float: 'right'}} color='success'>
				Voltar ao Programador Blockchain
			</Button>
		</Link>
	</Jumbotron>
}

const Rodape = () => {
	return <div 
		className='text-center'
		style={{
			backgroundColor: '#000000',
			color: '#288af7',
			height: 100,
			width: '100%',
			paddingTop: 10,
		}}>
		<ul className='list-inline text-center'>
			<li className='list-inline-item'>
				<a className='nav-link social-icon' href='https://github.com/harpia-br' target='_blanck'>
					<i className='fa fa-github fa-2x' />
				</a>
			</li>
			<li className='list-inline-item'>
				<a className='nav-link social-icon' href='https://instagram.com/programador_blockchain' target='_blanck'>
					<i className='fa fa-instagram fa-2x' />
				</a>
			</li>

		</ul>
		<p style={{ fontSize: 14, }}>
			&copy; 2020&nbsp;
			<Link to='/'>
				Programado Blockchain
			</Link>
			. 
		</p>
	</div>
}
