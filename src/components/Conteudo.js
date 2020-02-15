import React from 'react';
import { 
	Container,
	Row,
	Col,
	Image,
} from 'react-bootstrap';
import {
	Link,
} from 'react-router-dom';
import { connect, } from 'react-redux'

function Conteudo () {
	const tutorial_id = 'construaSuaAplicacaoBlockchain'
	return (<Container style={{ paddingTop: 20, marginBottom: 100, }}>
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
	</Container>)
}

const mapStateToProps = ({tutoriais}) => {
	return {
		tutoriais,
	}
}

export default connect(mapStateToProps, null)(Conteudo)

const MinhaChamada = () => {
	return <span> 
		Fala programador, aqui é o <a href='https://instagram.com/programador_blockchain' target='_blanck'><b>Léo do Programador Blockchain!</b></a> 
	</span>
}

const ChamadaTutorial = () => {
	return <span>
		Estou aqui para te mostrar como criar sua primeira aplicação blockchain com <b>React</b>, <b>Ehtereum</b>, <b>Web3.js</b> e <b>Solidity smart contracts</b>. 
		Você não precisa saber nada sobre blockchain para seguir. Eu vou ensinar do zero. Use esse guia passo a passo com exemplo de códigos
		e instruções escritas para começar sua jornada como desenvolvedor Blockchain!
	</span>
}

const ImagemTutorial = () => 
	<Image src='imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png' rounded fluid/>

