import React from 'react';
import ResetButton from './ResetButton';

export default function ErrorDisplay(props) {

	return(
		<div>
			<div>{props.error.message}</div>
			<ResetButton />
		</div>
	)
}