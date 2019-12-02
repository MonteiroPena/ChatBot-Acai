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
					startConversation(data.token)
					return true
				}
				else return false
			
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
			const { conversationId, token } = resposta.data
			console.log('Id da conversa = ' + conversationId)
			sendMessage(conversationId, token)
		}
	).catch(
		err => console.log(err)
	)
}

const sendMessage = async (conversaID, token) => {
	return await axios.post(
		`https://directline.botframework.com/v3/directline/conversations/${conversaID}/activities`,
		{
			"type": "message",
			"from": {
				"id": "id_jubileu",
				"name": "Jubileu"
			},
			"text": "kk eae man"
		},
		{
			headers: {
				'Authorization': `bearer ${token}`
			}
		}
	)
		.then(
			resposta => {
				const splited = resposta.data.id.split('|')
				const conversaIdBot = splited[0] // Id da conversa no contexto do Bot
				const idMensagem = splited[1] // Id da mensagem enviada pelo bot
				getBotResponse(conversaIdBot, idMensagem, token)
			}
		).catch(
			error => console.log('ERROR' + error)
		)
}

const getBotResponse = async ( conversaIdBot, idMensagem, token) => {
	return axios.get(
		`https://directline.botframework.com/v3/directline/conversations/${conversaIdBot}/activities?watermark=${idMensagem}`,
		{
			headers: {
				'Authorization': `bearer ${token}`
			}
		}
	).then(
		resposta => console.log(resposta.data.activities[0].text)
	)
}



export { Authenticate };
