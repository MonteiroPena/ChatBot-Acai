import axios from 'axios'
import apiKey from './apiKey'

const Authenticate = async () => {

	return await axios.post(
		'https://directline.botframework.com/v3/directline/tokens/generate',
		{},
		{
			headers: {'Authorization': `bearer ${apiKey}`}
		}
	)
		.then(
			resposta => {
				
				const { data } = resposta // IDConversa e Token
				
				if( data ) {
					console.log('autenticado',data.token)
					return startConversation(data.token)
				}
				
			
			}
	).catch(
		error => {
			console.log(error)
	});
}

const startConversation = async ( token ) => {
	return await axios.post(
		'https://directline.botframework.com/v3/directline/conversations',
		{},
		{
			headers: {
				'Authorization': `bearer ${token}`
			}
		}
	).then(
		resposta => {
			//console.log(resposta.data.conversationId)
			const { token } = resposta.data
			console.log('Id da conversa = ')
			sessionStorage.setItem('token', token)
			return token;

		}
	).catch(
		err => console.log(err)
	)
}

export { Authenticate };
