import React from 'react';

export default function ResetButton(props) {

	return(
		// resetSearch is function so it is event on click, and click run this function
		<button onClick={props.resetSearch}>try again</button>
	)
}