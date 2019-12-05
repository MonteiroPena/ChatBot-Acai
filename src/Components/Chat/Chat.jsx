
import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';
import apiKey from "../../services/apiKey";
import './Chat-style.css';

export default class extends React.Component {
	constructor(props) {
		super(props);
		
		this.directLine = new DirectLine({ token: `${apiKey}` });
	}
	
	render() {
		return (
			<ReactWebChat directLine={ this.directLine } userID='Joaozin' />
	);
	}
}
