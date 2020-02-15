import React from 'react';
import { 
	Navbar, 
	Nav, 
	Jumbotron,
	Button,
} from 'react-bootstrap';
import {
	Route,
	Switch,
	withRouter,
	Link,
} from 'react-router-dom';
import Conteudo from './components/Conteudo'
import Tutorial from './components/Tutorial'

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
