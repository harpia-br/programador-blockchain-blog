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

	return <div
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
		<p clasName='text-muted'>
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

		</div>
	</div>
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
