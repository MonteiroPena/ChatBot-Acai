import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const DadosContato = () => {
	return (
		<div className="center col-5">
			<p><b>E-mail:</b> acai@acai.com.br</p>
			<p><b>Telefone:</b> (11) 4002-8922</p>
			<p><b>Whatsapp:</b> (11) 99195-6364</p>
			<p><b>Endereço:</b> Av. 9 de Julho, 251</p>
		</div>
	);
}

const Contato = () => {

	return (
		<Fragment>
			<Header />
			<h1>Contatos</h1>

			<div className="row">
				<div className="center col-5" >
					<div className="card">
						<div className="card-image">
							<img src="https://www.gxportal.com/media/images/2013-02-14_1208-png.png?timestamp=20170913143749" />
						</div>
						<div className="card-action">
							<a href="https://www.google.com.br/maps/place/GSW+Solu%C3%A7%C3%B5es+Integradas/@-23.1913281,-45.8905117,17z/data=!3m1!4b1!4m5!3m4!1s0x94cc4a18d66d9607:0xfe285a79358e2324!8m2!3d-23.191333!4d-45.888323">Clique aqui para nos encontrar</a>
						</div>
					</div>
				</div>
				<DadosContato/>
			</div>
		</Fragment>
	);
}

export default Contato;