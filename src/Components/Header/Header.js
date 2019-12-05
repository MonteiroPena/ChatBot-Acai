import React, { useState } from 'react';
//import logoAcai from '../../Assets/acai-logotipo.png';
import LinkWrapper from './LinkWrapper';



function Header() {

	return (
		<div>
			<nav className="nav-wrapper header col-12" >
				<ul id="nav-mobile" className="center hide-on-med-and-down">
					<li><LinkWrapper to='/cardapio'><b><u>Cardápio</u></b></LinkWrapper></li>
					<li>
						<LinkWrapper to='/pedidos'>
							<b><u>Faça o Pedido</u></b>
						</LinkWrapper>
					</li>
					<li><LinkWrapper to='/contato'><b><u>Contato</u></b></LinkWrapper></li>
				</ul>
			</nav>
		</div >
	);

}
export default Header;