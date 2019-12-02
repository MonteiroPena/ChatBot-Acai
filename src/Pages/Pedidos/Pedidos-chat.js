import React, { Fragment } from 'react'

// Componentes
import Chat from '../../Components/Chat/Chat'
import SidebarComponent from "../../Components/Sidebar/Sidebar";
import Header from '../../Components/Header/Header';
// Estilizações
import './PedidosChat-style.css'

export default class PedidosChat extends React.Component {

	render() {
		return (
			<Fragment>
				<Header />
				<div className="row">
					<nav className='home-sidebar'>
						<SidebarComponent />
						<img className="format-img-pedido" src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC"/>
					</nav>
					<div className="home-main">
						<input type="text" name="username" placeholder="Digite o seu nome" />
						<div className="mensagens-format">
							<Chat />
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
