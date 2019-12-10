import React from "react";
import { Redirect, Route } from 'react-router-dom'
import { Authenticate } from "../services/authenticate";

const PrivateRoute = ( 	{ component: Component, ...rest } ) => (
	
	<Route  {...rest} render={ props => (
		
		Authenticate() ?
			
			<Component {...props} />
			
			:
			
			< Redirect to={{pathname: '/', state: { from: props.location }}}/>
	
	)}
	/>
)
export default PrivateRoute;
//