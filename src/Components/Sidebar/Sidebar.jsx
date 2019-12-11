import React, { Component, Fragment } from 'react';
import './Sidebar-style.css';
import Cardapio from '../../Pages/Cardapio/Cardapio';


export default class Sidebar extends Component {
	render() {
		return (
			<Fragment>
				<nav className='sidebar-container format-personalizado'>
					<h1 className='sidebar-title'>Cardápio</h1>
					<Cardapio/>
				</nav>
			</Fragment>
		)
	}
}
