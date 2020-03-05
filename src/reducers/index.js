import React from 'react'
import { 
	Image,
	Alert,
} from 'react-bootstrap';
import { combineReducers } from 'redux'
import {
	PEGAR_TUTORIAIS, 
} from '../actions'
import Gist from 'react-gist'

const estadoTutoriais = [
	{
		id: 1,
		data: '02 de Fevereiro, 2020',
		url: 'construaSuaAplicacaoBlockchain',
		titulo: 'Construa Sua Primeira Aplicação Blockchain',
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
				ancora: 'tutorialConsideracoesFinais',
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
				Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para interagir com nossa lista de tarefas.
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
					module.exports = function(implantador) {'{'}<br />
					&emsp;implantador.deploy(ListaDeTarefas);<br />
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
					{"// => '0xABC123...'"}<br />
					contagemDeTarefas = await contrato.contagemDeTarefas()<br />
					{'// => 0'}
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
				<Gist id='a415a88e7ddd0301e5fcf9962541da82' />
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
					Vamos configurar nossa conta e acessar nossa rede Blockchain com o <b>MetaMask</b>.
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

				<Gist id='499aa7b12c039a4fd464ba028ea91825' />

				<p>
					Parabéns já conseguimos listar, cadastrar e completar tarefas direto do nossa Blockchain, quando tentamos criar ou completaruma tarefa um notificação do MetaMask vai aparecer pergutando se concordamos com a transação assim como o consumo de 'Gas', uma fração de Ether para pagar os 'mineradores'.
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
				<div id='tutorialConsideracoesFinais'>
					<h3>Considerações Finais</h3>
					<p>
						Nesse tutorial vemos o básico de transações com smart contrato mas se em vez de uma lista de tarefas fosse uma lista de produtos a venda, 
						usado Ether, nosso próximo tutorial faremos uma loja com smart contratos, mas a lógica é a mesma o que mudará será nosso contrato.
						Até a Próxima!
					</p>
				</div>
		</>
	},
	{
		id: 2,
		data: '15 de Fevereiro, 2020',
		url: 'construaUmMercadoAbertoComContratoInteligentes',
		titulo: 'Construa um Mercado Aberto com Ethereum',
		imagem: 'imagens/contratos-inteligentes.jpeg',
		chamada: <span>Estou aqui para te mostrar como criar uma <b>mercado aberto</b> onde qualquer um pode <b>cadastrar, vender ou comprar produtos com garantia de entrega</b>!</span>,
		rodape: 'Construa seu Mercado Aberto Blockchain agora! >>',
		h1: 'Como Construir um Mercado Aberto Blockchain com React, Ethereum, Web3.js e Solidity Smart Contracts',
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
				ancora: 'tutorialConsideracoesFinais',
				titulo: 'Considerações Finais'
			},
		],
		oQueVamosConstruir: <div id='conteudoOQueNosVamosContruir'>
			<h3>O que vamos construir?</h3>
			<p>
				Eu escolhi uma aplicação de mercado onde quem tem acesso a rede Blockchain Ethereum possa comprar e vender produtos e ter meios de garantir que se receba o produto.
				Eu vou te ensina como ler e escrever dados na blockchain, assim como a lógica de negócio que vai controla o comportamento da nossa aplicação. 
				Assim como também ensinar os fundamentos de como a <b>Blockchain</b> funciona e como escrever <b>Smart Contracts Ethereum</b>.
			</p>
		</div>,
		comoNossaBlockchainVaiFuncionar: <div id='tutorialComoNossoBlockchainVaiFuncionar'>
			<h3>Como nosso Blockchain vai funcionar?</h3>
			<p>
				Nos vamos criar uma <b>aplicação web com React</b> de lista de tarefas que falará diretamente com a Blockchain. 
				Nos vamos usar a <b>Ethereum Blockchain</b> nesse tutorial, criaremos um <b>smart contract em Solidity</b> que alimetará a lista de tarefas e implantaremos na blockchain.
				Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para interagir com nossa lista de tarefas.
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
						$ sudo create-react-app mercadoAberto
					</p>
					<p>
						$ cd mercadoAberto
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
					$ sudo touch src/contracts/MercadoAberto.sol
				</Alert>
				<p>
					Abra o arquivo com seu editor favorito e vamos iniciar com a versão e declaração do contrato
				</p>
				<Alert variant='secondary'>
					pragma solidity ^0.5.0;
					<br />
					<br />
					contract MercadoAberto {'{'}
					<br />
					&emsp;uint public contagemDeProdutos = 0;
					<br />
					{'}'}
				</Alert>
				<p>
					Nos criamos um smart contract chamado <b>MercadoAberto</b> seguido pelas 'chaves'.
					Nos vamos contabilizar os produtos através de uma variável de estado, qualquer dado nessa variável será escrita no armazenamento da Blockchain.
					O modificador especial chamado 'public' instrui ao Solidity crie uma função chamada 'contagemDeProdutos()' para poder acessar a variável de fora do contrato, como a aplicação web ou pelo terminal.
				</p>
				<p>
					Agora vamos compliar o smart contract, entre no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle compile
				</Alert>
				<p>
					Parabéns! Você escreveu seu primeiro <b>smart contract Ethereum</b>. Um novo arquivo foi gerado 'src/abis/MercadoAberto.json'. 
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
					const MercadoAberto = artifacts.require('./MercadoAberto.sol'); <br/>
					<br />
					module.exports = function(implantador) {'{'}<br />
					&emsp;implantador.deploy(MercadoAberto);<br />
					{'}'};
				</Alert>
				<p>
					Primeiro, nos vamos pegar o contrato e colocamos na constante 'MercadoAberto'.
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
					contrato = await MercadoAberto.deployed()<br />
					contrato.address<br />
					{"// => '0xABC123...'"}<br />
					contagemDeProdutos = await contrato.contagemDeProdutos()<br />
					{'// => 0'}
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
				<Gist id='d2b209806740753c0e9f74ad755ff3f0' />
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
					contrato = await MercadoAberto.deployed()<br />
					contrato.address<br />
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
					Vamos configurar nossa conta e acessar nossa rede Blockchain com o <b>MetaMask</b>.
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

				<Gist id='207e9e3e3062d6d955915ced72bada63' />

				<p>
					Parabéns já conseguimos listar, cadastrar, comprar ou vender produtos direto do nossa Blockchain, quando tentamos enviar um comando que altere os valores da Blockchain uma notificação do MetaMask vai aparecer perguntando se concordamos com a transação assim como o consumo de 'Gas', uma fração de Ether para pagar os 'mineradores'.
				</p>
				<p>
					Algumas ponderações, já devem ter reparado que todas vez que migramos um contrato gastamos <b>Gas</b> e que os contratos são imutaveis então caso haja um erro no contrato teremos que subir um novo e gastar mais 'Gas'.
				</p>
				<p>
					Cadastre produto com uma conta e importe outra conta para poder comprar, volte a conta de vendendor cancele ou como comprador confirme o recebimento para ver as transações de Ether.
				</p>
			</div>
			<div id='tutorialConsideracoesFinais'>
				<h3>Considerações Finais</h3>
				<p>
					Parabéns !! Terminamos nosso tutorial, aprendemos através de contrato inteligente listar produtos e vender de uma forma mais segura mas isso é apenas o básico, 
					use apenas para aprender a usar os contratos inteligentes, no próximo tutorial iremos aprender a criar a nossa própria moeda no Blockchain Ethereum.
					Até a Próxima!
				</p>
			</div>
		</>
	},
	{
		id: 3,
		data: '24 de Fevereiro, 2020',
		url: 'construaSuaPropriaMoeda',
		titulo: 'Construa Sua Própria Moeda Token',
		imagem: 'imagens/erc20.png',
		chamada: <span>Estou aqui para te mostrar como criar <b>sua própria moeda token</b> e como <b>vende-la</b>.</span>,
		rodape: 'Crie sua Moeda Token agora! >>',
		h1: 'Como Construir sua própria Moeda Token com React, Ethereum, Web3.js e Solidity Smart Contracts',
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
				ancora: 'tutorialERC20',
				titulo: 'ERC20'
			},
		],
		oQueVamosConstruir: <div id='tutorialOQueNosVamosContruir'>
			<h3>O que vamos construir?</h3>
			<p>
				Vamos construir dois contratos um para a nossa moeda token e uma para que as pessoas possam adquiri-las.
			</p>
		</div>,
		comoNossaBlockchainVaiFuncionar: <div id='tutorialComoNossoBlockchainVaiFuncionar'>
			<h3>Como nosso Blockchain vai funcionar?</h3>
			<p>
				Nos vamos criar uma <b>aplicação web com React</b> para a compra da moeda direto da Blockchain. 
				Nos vamos usar a <b>Ethereum Blockchain</b> nesse tutorial, criaremos dois <b>smart contract em Solidity</b> um que terá as informações da nossa moeda e como tranferi-la e um outro acessando a moeda e transferindo para quem a compra-la.
				Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para interagir com nossos contratos.
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
						$ sudo create-react-app minhaMoeda
					</p>
					<p>
						$ cd minhaMoeda
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
					Vamos começar a desenvolver o smart contract que vai administrar nossa moeda e a venda. Crie um arquivo novo com extensão 'sol':
				</p>
				<Alert variant='secondary'>
					$ sudo touch src/contracts/MinhaMoeda.sol
				</Alert>
				<p>
					Abra o arquivo com seu editor favorito e vamos iniciar com a versão e declaração do contrato
				</p>
				<Alert variant='secondary'>
					pragma solidity ^0.5.0;
					<br />
					<br />
					contract MinhaMoeda {'{'}
					<br />
					&emsp;uint public tokens = 0;
					<br />
					{'}'}
				</Alert>
				<p>
					Nos criamos um smart contract chamado <b>MinhaMoeda</b> seguido pelas 'chaves'.
					Nos vamos contabilizar os produtos através de uma variável de estado, qualquer dado nessa variável será escrita no armazenamento da Blockchain.
					O modificador especial chamado 'public' instrui ao Solidity crie uma função chamada 'tokens()' para poder acessar a variável de fora do contrato, como a aplicação web ou pelo terminal.
				</p>
				<p>
					Agora vamos compliar o smart contract, entre no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle compile
				</Alert>
				<p>
					Parabéns! Você escreveu seu primeiro <b>smart contract Ethereum</b>. Um novo arquivo foi gerado 'src/abis/MinhaMoeda.json'. 
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
					const MinhaMoeda = artifacts.require('./MinhaMoeda.sol'); <br/>
					<br />
					module.exports = function(implantador) {'{'}<br />
					&emsp;implantador.deploy(MinhaMoeda);<br />
					{'}'};
				</Alert>
				<p>
					Primeiro, nos vamos pegar o contrato e colocamos na constante 'MinhaMoeda'.
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
					contrato = await MinhaMoeda.deployed()<br />
					contrato.address<br />
					{"// => '0xABC123...'"}<br />
					tokens = await contrato.tokens()<br />
					{'// => 0'}
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
				<Gist id='68a627bf3450568073a726e732facce3' />
				<p>
					Agora vamos implantar esse novo contrato. Nos vamos implantar uma nova cópia nosso código.
					Lembre-se smart contract são imutáveis. Não podem ser alterados.
					Nos podemos sempre criar um novo contrato. Truffle facilita nosso processo nisso.
					Entre no terminal:
				</p>
				<Alert vaiant='secondary'>
					$ sudo truffle compile<br />
					$ sudo truffle migrate --reset
				</Alert>
				<p>
					E pronto novo contrato no ar. Agora vamos acessar o terminal do Truffle e ver as tarefas na Blockchain.
				</p>
				<Alert variant='secondary'>
					$ sudo truffle console<br />
					contrato = await MinhaMoeda.deployed()<br />
					contrato.address<br />
				</Alert>
				<p>
					Vamos contruir nosso segundo contrato para as pessoas poderem adquirir nossa moeda,
					crie um novo arquivo chamado:
				</p>
				<Alert variant='secondary'>
					$ sudo touch src/contracts/VendaDaMinhaMoeda.sol
				</Alert>
				<p>
					E adicione o seguinte código:
				</p>
				<Gist id='d52607cf5d2e3ac97872db4707335fad' />
				<p>
					Vamos compila-lo:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle compile
				</Alert>
				<p>
					Agora vamos atualizar nosso arquivo de migração:
				</p>
				<Alert variant='secondary'>
					const MinhaMoeda = artifacts.require('./MinhaMoeda.sol'); <br/>
					const VendaDaMinhaMoeda = artifacts.require('./VendaDaMinhaMoeda.sol'); <br/>
					<br />
					module.exports = function(implantador) {'{'}<br />
					&emsp;implantador.deploy(MinhaMoeda, 100000000);<br />
					&emsp;{'.then(() => {'}<br />
					&emsp;&emsp;const preco = 10000000000000;<br />
					&emsp;&emsp;{'return implantador.deploy(VendaDaMinhaMoeda, MinhaMoeda.address, preco)'}<br />
					&emsp;{'})'}
					{'}'};
				</Alert>
				<p>
					Então vamo implata-lo no blockchain:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle migrate --reset
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
					Vamos configurar nossa conta e acessar nossa rede Blockchain com o <b>MetaMask</b>.
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

				<Gist id='86dc2256ff774ed570a61b0566d707be' />

				<p>
					Parabéns já conseguimos criar uma nova moeda e diponibiliza-la para compra direto do nossa Blockchain, quando tentamos enviar um comando que altere os valores da Blockchain uma notificação do MetaMask vai aparecer perguntando se concordamos com a transação assim como o consumo de 'Gas', uma fração de Ether para pagar os 'mineradores'.
				</p>
				<p>
					Algumas ponderações, já devem ter reparado que todas vez que migramos um contrato gastamos <b>Gas</b> e que os contratos são imutaveis então caso haja um erro no contrato teremos que subir um novo e gastar mais 'Gas', vamos criar um teste para validar nosso contrato.
				</p>
				<p>
					Import outras contas do Ganache e adquira alguns tokens da nova moeda.
				</p>
				<p>
					Terminamos nosso tutorial, aprendemos através de contratos criar e transferir um token, nossa moeda, mas apenas o básico, use apenas para aprender a usar os contratos inteligentes.
				</p>
			</div>
			<div id='tutorialERC20'>
				<h3>ERC20</h3>
				<p>
				No começo não existia padrões para criar uma moeda, onde cada contrato era diferente do outro gerando dificuldade de integração com corretoras e provedores de carteiras, que deveriam criar um código personalizado para poder conversam com seu contrato e as pessoas interagirem, com o tempo a comunidade criou padrões para ese contratos chamados de ERC, Ethereum Request for Comments, mais uma numeração, o mais popular hoje com certeza é o <b>ERC20</b>, que define 6 funções obrigatórias e 3 opcionais para implantação do padrão, que são elas:
				</p>
				<ul>
					<li>name</li>
					<li>symbol</li>
					<li>decimals</li>
					<li>totalSupply</li>
					<li>balanceOf</li>
					<li>trasnfer</li>
					<li>transferFrom</li>
					<li>approve</li>
					<li>allowance</li>
				</ul>
				<p>
					Mas como dito é apenas um padrão que pode melhorar no site <a href='https://github.com/ethereum/EIPs' target='_blanck'>ERC20</a>, temos a interface para implementação e também o <a href='https://eips.ethereum.org/' target='_blanck'>EIP</a> para as proposta de melhorias da comunidade.
					Um exemplo de uma contrato com ERC20:
				</p>
				<Gist id='764394fe415954f90d13625805e672ba' />
				<p>
					Mas sempre mais e mais padrões são criados e melhorados, hoje já exitem milhares de moedas, tokens, que servem para trocas, transferências e posse de partes de alguma empresa por exemplos, como podemos perceber os usos são imensos e com tempo crescerá cadas vez mais e estão aqui para ficar, já que como os contratos uma vez implantado não pode ser mais alterado garatindo segurança para quem o usa.
					Até a próxima!
				</p>
			</div>
		</>
	},
	{
		id: 4,
		data: '02 de Março, 2020',
		url: 'facaSuaEleicao',
		titulo: 'Faça sua Eleição via Smart Contract',
		imagem: 'imagens/eleicao.jpg',
		chamada: <span>Estou aqui para te mostrar como criar um <b>sistema de eleição</b> simples.</span>,
		rodape: 'Construa seu sistema de eleição! >>',
		h1: 'Como fazer um processo de eleição com React, Ethereum, Web3.js e Solidity Smart Contracts',
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
				ancora: 'tutorialConsideracoesFinais',
				titulo: 'Considerações Finais'
			},
		],
		oQueVamosConstruir: <div id='tutorialOQueNosVamosContruir'>
			<h3>O que vamos construir?</h3>
			<p>
				Vamos construir um contrato paca guardar os dados dos candidatos, votos e eleitores que já votaram.
			</p>
		</div>,
		comoNossaBlockchainVaiFuncionar: <div id='tutorialComoNossoBlockchainVaiFuncionar'>
			<h3>Como nosso Blockchain vai funcionar?</h3>
			<p>
				Nos vamos criar uma <b>aplicação web com React</b> para votar diretamente na Blockchain. 
				Nos vamos usar a <b>Ethereum Blockchain</b> nesse tutorial, criaremos um <b>smart contract em Solidity</b> que terá as informações dos candidatos, votos e os eleitores que já votaram.
				Nos vamos também nos conectar a rede com nossa conta pessoal com a carteira (wallet em inglês) Ethereum para interagir com nossos contratos.
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
						$ sudo create-react-app eleicao
					</p>
					<p>
						$ cd eleicao
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
					Vamos começar a desenvolver o smart contract que vai administrar nossa eleição. Crie um arquivo novo com extensão 'sol':
				</p>
				<Alert variant='secondary'>
					$ sudo touch src/contracts/Eleicao.sol
				</Alert>
				<p>
					Abra o arquivo com seu editor favorito e vamos iniciar com a versão e declaração do contrato
				</p>
				<Alert variant='secondary'>
					pragma solidity ^0.5.0;
					<br />
					<br />
					contract Eleicao {'{'}
					<br />
					<br />
					{'}'}
				</Alert>
				<p>
					Nos criamos um smart contract chamado <b>Eleicao</b> seguido pelas 'chaves'.
					Nos vamos contabilizar os produtos através de uma variável de estado, qualquer dado nessa variável será escrita no armazenamento da Blockchain.
				</p>
				<p>
					Agora vamos compliar o smart contract, entre no terminal:
				</p>
				<Alert variant='secondary'>
					$ sudo truffle compile
				</Alert>
				<p>
					Parabéns! Você escreveu seu primeiro <b>smart contract Ethereum</b>. Um novo arquivo foi gerado 'src/abis/Eleicao.json'. 
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
					const MinhaMoeda = artifacts.require('./Eleicao.sol'); <br/>
					<br />
					module.exports = function(implantador) {'{'}<br />
					&emsp;implantador.deploy(Eleicao);<br />
					{'}'};
				</Alert>
				<p>
					Primeiro, nos vamos pegar o contrato e colocamos na constante 'Eleicao'.
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
					contrato = await MinhaMoeda.deployed()<br />
					contrato.address<br />
					{"// => '0xABC123...'"}<br />
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
				<Gist id='2c1ca7d15a64df4660ec752105d8e52a' />
				<p>
					Agora vamos implantar esse novo contrato. Nos vamos implantar uma nova cópia nosso código.
					Lembre-se smart contract são imutáveis. Não podem ser alterados.
					Nos podemos sempre criar um novo contrato. Truffle facilita nosso processo nisso.
					Entre no terminal:
				</p>
				<Alert vaiant='secondary'>
					$ sudo truffle compile<br />
					$ sudo truffle migrate --reset
				</Alert>
				<p>
					E pronto novo contrato no ar. Agora vamos acessar o terminal do Truffle e ver na Blockchain.
				</p>
				<Alert variant='secondary'>
					$ sudo truffle console<br />
					contrato = await Eleicao.deployed()<br />
					contrato.address<br />
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
					Vamos configurar nossa conta e acessar nossa rede Blockchain com o <b>MetaMask</b>.
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

				<Gist id='29a226256f94ed65c025aba7d6c38641' />

				<p>
					Parabéns criamos  um sitema eleitoral simples, quando tentamos enviar um comando que altere os valores da Blockchain uma notificação do MetaMask vai aparecer perguntando se concordamos com a transação assim como o consumo de 'Gas', uma fração de Ether para pagar os 'mineradores'.
				</p>
				<p>
					Algumas ponderações, já devem ter reparado que todas vez que migramos um contrato gastamos <b>Gas</b> e que os contratos são imutaveis então caso haja um erro no contrato teremos que subir um novo e gastar mais 'Gas'.
				</p>
				<p>
					Import outras contas do Ganache e tente votar em algum candidato.
				</p>
			</div>
			<div id='tutorialConsideracoesFinais'>
				<h3>Considerações Finais</h3>
				<p>
					Você deve ter reparado que qualquer um pode votar e pode-se criar contas infinitas para votar, 
					para usar em produção faça uma validação de quem pode votar ou não, cadidato que venceue etc, 
					Até próxima desenvolvedor Blockchain.
				</p>
			</div>
		</>
	}
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
