import c from '../constants'

export const fetchUser = (page, count) => {
	return {
		type: c.FETCH_USER_START,
		payload: {page, count}
	}
}