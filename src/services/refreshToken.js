import axios from 'axios'

const refreshToken = token => {
	axios.post(
		'https://directline.botframework.com/v3/directline/tokens/refresh',
		{},
		{
			headers: { 'Authenticate': `bearer ${token}` }
		}
	)
}


export default refreshToken
