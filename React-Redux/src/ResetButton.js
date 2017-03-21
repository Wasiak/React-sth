import React from 'react';
import { connect } from 'react-redux';
import { resetSearch } from './actions';

function ResetButton(props) {

	return(
		// resetSearch is function so it is event on click, and click run this function
		<button onClick={props.resetSearch}>try again</button>
	)
}

const mapDispatchToProps = {
  resetSearch
}

export default connect(null, mapDispatchToProps)(ResetButton);