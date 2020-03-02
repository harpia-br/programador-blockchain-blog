import React, { useState, useEffect, } from 'react';
import { 
	Container,
	Image,
	Alert,
} from 'react-bootstrap';
import { connect, } from 'react-redux'
import MinhaChamada from './MinhaChamada'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	fab: {
		position: 'fixed',
		margin: 16,
		right: 0,
		bottom: 0,
	},
}));

function Tutorial (props) {

	const { tutorial, } = props
	const classes = useStyles();

	const [umaVez, setUmaVez] = useState(false)

	useEffect(() => {
		document.location.href='#app'
		setUmaVez(true)
	}, [umaVez])

	return <React.Fragment>
		<Container
			style={{
				maxWidth: '850px',
				minHeight: '800px',
				paddingTop: '20px',
				paddingBottom: '20px',
			}}
			className='pl-4 pr-4'>
			<h1 style={{ fontFamily: 'Roboto Condensed, sans-serif', }}>
				{tutorial.h1}
			</h1>
			<p className='text-muted'>
				Por Léo Pereira - {tutorial.data}
			</p>
			<div className='descricao'>
				<MinhaChamada />
				<br />
				<br />
				{tutorial.chamada}
				<br />
				<br />
				<Image src={tutorial.imagem} rounded fluid/>

				<div id='introducao'>
					Se você já conhece o básico, pode avançar e começar a codificar o aplicativo agora!
				</div>

				<div id='tabelaDeConteudos'>
					<h2>Tabela de Conteúdo</h2>
					<ul>
						<li>Introdução</li>
						<ul>
							<li><a href='#tutorialOQueNosVamosContruir'>O que nos vamos construir?</a></li>
							<li><a href='#tutorialOQueEBlockchain'>O que é Blockchain?</a></li>
							<li><a href='#tutorialOQueEUmSmartContract'>O que é um Smart Contract?</a></li>
							<li><a href='#tutorialComoNossoBlockchainVaiFuncionar'>Como nosso Blockchain vai funcionar?</a></li>
						</ul>
						<li>Passo a Passo</li>
						<ul>
							{
								tutorial.listaDeConteudo.map(item => {
									return <li key={item.ancora}>
										<a href={`#${item.ancora}`}>{item.titulo}</a>
									</li>
								})
							}
						</ul>
					</ul>
				</div>
				{tutorial.oQueVamosConstruir}
				<Teoria />
				{tutorial.comoNossaBlockchainVaiFuncionar}
				<DependenciasEthereum />
				{tutorial.conteudo}
			</div>
		</Container>
		<Fab
			className={classes.fab}
			onClick={() => document.location.href='#app'} 
			variant="extended">
			<NavigationIcon className={classes.extendedIcon} />
			Topo
		</Fab>
	</React.Fragment>
}

const mapStateToProps = ({tutoriais}, props) => {
	const url = props.match.params.tutorial
	const tutorial = tutoriais.find(item => item.url === url)
	return {
		tutorial,
	}
}

export default connect(mapStateToProps, null)(Tutorial)

const Teoria = () => {
	return <> 
		<div id='tutorialOQueEBlockchain'>
			<h3>O que é Blockchain?</h3>
			<p>
				Para entendermos como funciona Blockchain primeiro precisamos enteder como funcionam as aplicações hoje.
				Quando entramos num site para acessar nossa lista de tarefas usamos um Browser para se conectar a um Servidor Web na Internet.
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
	</>
}

const DependenciasEthereum = () => {
	return 	<div id='tutorialInstalandoDependencias'>
		<h3>Instalando Dependências</h3>
		<p>
			Agora vamos instalar todas as dependências que precisaremos para construir nosso projeto.
			Primeiro, vamos configurar um blockchain pessoal para desenvolvimento local.
		</p>
		<h4>Ganache Blockchain Ethereum Pessoal</h4>
		<p>
			O <a target='_blanck' href='https://github.com/trufflesuite/ganache/releases'>Ganache</a> simula o comportamento da blockchain pública. Permite implantar smart contracts, desenvolver aplicações e rodar testes. 
			Está diponível para Windows, Mac, Linux como uma aplicação desktop ou por linha de comando
		</p>
		<Image src='imagens/1-ganache.png' rounded fluid/>
		<p>
			Você pode encontrar a ultima versão do software para seu sistema operacional <a href='https://github.com/trufflesuite/ganache/releases' target='_blanck'>clique aqui</a>.
			Uma vez baixado o arquivo compactado, extraia o instalado e rode atraves dos passo de configuração. 
			Quando terminar e abrir terá uma página parecida como essa:
		</p>
		<Image src='imagens/2-ganache.png' rounded fluid/>
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
		<Image src='imagens/4-truffle.png' rounded fluid/>
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
		<Image src='imagens/9-metamask.png' rounded fluid/>
		<p>
			Para instalar o <b>Metamask</b>, <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=pt-br' target='_blanck'>visite esse link</a> ou procure por Metamask Chrome plugin na loja web do Google Chrome. Quando instalado você verá um icone de raposa no topo direito.
		</p>
		<p>
			Metamask também permite administrar sua conta pessoal e seu fundos Ether (moeda digital da rede Ethereum) pque são necessários para pagar as transações.
		</p>
	</div>
}
