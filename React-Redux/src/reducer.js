export default function reducer(state = {
	isLoading: false,
	//profile: {name: { first: 'jon', last: 'snow'}, age: 8},
	profile: null,
	error: null
}, action) {
	switch (action.type) {
		case 'START_SEARCH': {
			return {
				...state,
				isLoading: true
			};
		}
		case 'RESET_SEARCH': {
			return {
				isLoading: false,
				profile: null,
				error: null
			};
		}
		case 'SEARCH_SUCCESS': {
			return {
				...state,
				isLoading: false,
				profile: action.data,
				error: null
			};
		}
		case 'SEARCH_ERROR': {
			return {
				...state,
				isLoading: false,
				error: action.data,
				profile: null
			};
		}
		case 'CHANGE_AGE': {
			return {
				...state,
				profile: {
					...state.profile,
					age: 9
				} 
			}
		}
		case 'CHANGE_FIRST_NAME': {
			return {
				...state,
				profile: {
					...state.profile,
					name: {
						...state.profile.name,
						first: 'nojon'
					}
				} 
			}

			// return immutably.set(state, 'profile.name.first', 'nojon')
		}
		default: 
			return state;
	}
}
