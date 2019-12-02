import React from 'react';

class Login extends React.Component {
	render() {
		return (

			<div>
				<form>
					
					<div className="form-group">
						<input type="text" className="form-control" id="recipient-name" placeholder="Digite seu login" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" id="recipient-name" placeholder="Digite seu telefone" />
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-primary btn-lg btn-block" data-dismiss="modal">Entrar</button>
					</div>
				</form>
			</div>

		);
	}
}
export default Login;