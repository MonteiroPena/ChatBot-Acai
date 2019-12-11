
import { DirectLine } from 'botframework-directlinejs';
import React, { Component }from 'react';
import ReactWebChat from 'botframework-webchat';
import apiKey from "../../services/apiKey";
import './Chat-style.css';

export default class extends Component {
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
