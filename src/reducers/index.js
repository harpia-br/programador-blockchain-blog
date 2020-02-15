import { combineReducers } from 'redux'
import {
	PEGAR_TUTORIAIS, 
} from '../actions'

const estadoTutoriais = [
	{
		titulo: 'Contrua Sua Primeira Aplicação Blockchain',
		imagem: 'imagens/smart-contracts-ethereum-contratos-inteligentes-740x492.png',
		chamada: 'Estou aqui para te mostrar como criar sua primeira aplicação blockchain com <b>React</b>, <b>Ehtereum</b>, <b>Web3.js</b> e <b>Solidity smart contracts</b>. Você não precisa saber nada sobre blockchain para seguir. Eu vou ensinar do zero. Use esse guia passo a passo com exemplo de códigos e instruções escritas para começar sua jornada como desenvolvedor Blockchain!',
		rodape: 'Comece a aprender Blockchain agora! >>',
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
