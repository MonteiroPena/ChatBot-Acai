import React, { Component, Fragment } from 'react';
import './Sidebar-style.css';
import Cardapio from '../../Pages/Cardapio/Cardapio';


export default class Sidebar extends Component {

	state = {
		acai: [
			{
				tamanho: '300ml',
				preco: 'R$ 4,00',
				adicional: 'Leite em pó',
				precoAdicional: 'R$ 1,00'
			},
			{
				tamanho: '500ml',
				preco: 'R$ 6,00',
				adicional: 'Leite condensado',
				precoAdicional: 'R$ 1,00'
			},
			{
				tamanho: '700ml',
				preco: 'R$ 8,00',
				adicional: 'Granola',
				precoAdicional: 'R$ 1,00'
			},
			{
				tamanho: '1L',
				preco: 'R$ 10,00',
				adicional: 'Paçoca',
				precoAdicional: 'R$ 1,00'
			}
		]
	}
	render() {
		return (
			<Fragment>
				<nav className='sidebar-container format-personalizado'>
					<h1 className='sidebar-title'>Cardápio</h1>
					<Cardapio acai={this.state.acai} />
				</nav>
			</Fragment>
		)
	}
}
