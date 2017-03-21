import {get} from './utils';

function searchSuccess(profile) {
	return {
		type: 'SEARCH_SUCCESS',
		data: profile
	}
}

function searchError(err) {
	return {
		type: 'SEARCH_ERROR',
		data: err
	}
}

function startSearch() {
	// console.trace();
	return {
		type: 'START_SEARCH'
	}
}

export function search(value) {
	return async function (dispatch) {
		dispatch(startSearch(value));
		try {
			const profile = await get('https://api.github.com/users/' + value);
			dispatch(searchSuccess(profile));
			//anothre function from this file f.e. scrolltoTop()
		} catch (err) {
			dispatch(searchError(err));
		}
	}
}

export function resetSearch() {
	return {
		type: 'RESET_SEARCH'
	}
}
