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
	return(
		<tbody>
			{itens}
		</tbody>
	);
}

class Cardapio extends Component {
	render() {

		const { acai } = this.props;
		return (
			<div>
				<table className="table table-striped cardapio-format centered">
					<TableHead />
					<TableBody acai={acai} />
				</table>
			</div>
		);
	}
}

export default Cardapio;