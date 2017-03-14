import React from 'react';
import ResetButton from './ResetButton';

export default function Details(props) {

	return(
		<div>
			<div>{props.name}</div>
			<img className="image" src={props.img} />
			<ResetButton resetSearch={props.resetSearch} />
		</div>
	)

}