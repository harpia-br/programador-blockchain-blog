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
import MinhaChamada from './MinhaChamada'

class Conteudo extends React.Component {

	render (){
		const {
			tutoriais,
		} = this.props
		return <Container style={{ paddingTop: 20, marginBottom: 100, }}>
			{
				tutoriais &&
					tutoriais.map(item => {
						return <div key={item.id} style={{ marginBottom: 30, }}>
							<h2>
								<Link to={`/${item.url}`}>
									{item.titulo}
								</Link>
							</h2>
							<Row>
								<Col sm={12} xs={12} md={12} lg={6}>
									<Image src={item.imagem} rounded fluid/>
								</Col>
								<Col sm={12} xs={12} md={12} lg={6} style={{ fontSize: 18, fontFamily: 'Verdana', }}>
									<MinhaChamada />
									&nbsp;
									{item.chamada}
									<br />
									<br />
									<Link to={`/${item.url}`}>
										{item.rodape}
									</Link>
								</Col>
							</Row>
						</div>
					})
			}
		</Container>
	}
}

const mapStateToProps = ({tutoriais}) => {
	return {
		tutoriais,
	}
}

export default connect(mapStateToProps, null)(Conteudo)
