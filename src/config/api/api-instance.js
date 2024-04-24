import axios from 'axios'
import { locStorage } from '../utils/session-local-storage'

const apiInstance = axios.create({
	baseURL: process.env.REACT_APP_API_SERVER_URL,
	timeout: 8000
})

apiInstance.interceptors.request.use(
	(config) => {
		const authToken = locStorage.getItem('authToken').access_token
		if (authToken) {
			config.headers.Authorization = `Bearer ${authToken}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default apiInstance
