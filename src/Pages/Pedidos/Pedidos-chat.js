import React, { Fragment } from 'react'

// Componentes
import Chat from '../../Components/Chat/Chat'
import SidebarComponent from "../../Components/Sidebar/Sidebar";
import Header from '../../Components/Header/Header';
// Estilizações
import './PedidosChat-style.css'
import { Authenticate } from '../../services/authenticate';


export default class PedidosChat extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	//	this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { name: '', token: '', validacao: false }
	}



	handleClick(e) {
		Authenticate().then(
			token => {
				if(token !== null){
					this.setState({
						validacao: true
					})
				}
			}
		);
		e.preventDefault();
		this.setState({
			token: sessionStorage.getItem('token')
		})
		
		alert(`Obrigado ${this.state.name}, seja bem-vindo!`);
		console.log(this.state.token);
	}

	handleTextChange(event) {
		event.preventDefault();
		this.setState({ name: event.target.value });
	}

	
/*
	handleSubmit(e) {
		e.preventDefault();
		let dataToSend = {
			userData: {
				name: this.state.name
			}
		};
		fetch( Authenticate , {
			method: "POST",
			body: JSON.stringify(dataToSend),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		.then(responseJson => {
			if(responseJson.sucess){
				localStorage.setItem('NAME', responseJson.token);
			}
		})
	}
*/
	render() {
		return (
			<Fragment>
				<Header />
				<div className="row">
					<nav className='home-sidebar'>
						<SidebarComponent />
						<img className="format-img-pedido" src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC" />
					</nav>
					<div className="home-main">
						<div>
							<form >
								<div>
									<button className="btn waves-effect waves-light format-btn-inserir-nome" type="submit" onClick={this.handleClick} name="action">Inserir meu Nome </button>

									<input className="format-input-inserir-nome" type="text" placeholder="Digite o seu nome" onChange={this.handleTextChange} value={this.state.name} />

								</div>
							</form>
						</div>
						<div className="mensagens-format">
							{this.state.validacao? <Chat />: null}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}
