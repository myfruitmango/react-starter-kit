// ** React imports
import { useState } from 'react'

export const useForm = (initialState) => {
	const [state, setState] = useState(initialState)

	const fnUpdateState = (e) => {
		setState((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	return { state, fnUpdateState }
}
