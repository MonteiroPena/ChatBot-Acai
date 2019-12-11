import React, { Component } from 'react';
import './Cardapio-style.css';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th><u>Tamanho</u></th>
				<th><u>Preços</u></th>
				<th><u>Adicional</u></th>
				<th><u>Preço Adicional</u></th>
			</tr>
		</thead>
	);
}

const TableBody = props => {
	const itens = props.acai.map((item, index) => {
		return (
			<tr key={index}>
				<td>{item.tamanho}</td>
				<td>{item.preco}</td>
				<td>{item.adicional}</td>
				<td>{item.precoAdicional}</td>
			</tr>
		);
	});
	return (
		<tbody>
			{itens}
		</tbody>
	);
}

class Cardapio extends Component {

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
			<div>
				<table className="table table-striped cardapio-format centered">
					<TableHead />
					<TableBody acai={this.state.acai} />
				</table>
			</div>
		);
	}
}

export default Cardapio;