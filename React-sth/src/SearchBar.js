import React, { Component } from 'react';

export default class SearchBar extends Component {

	// state = {
 //    value: ''
	// };

	constructor(props) {
		super(props);
		this.state = {value: ''};
	}

	handleInputChange(evt) {
    this.setState({value: evt.target.value});
	}

	render() {
		const isDisable = this.state.value === '';

		return(
			<div>
				<input
				  type='text'
				  placeholder='Type username'
				  value={this.state.value}
				  onChange={evt => this.handleInputChange(evt)}/>
				<button disabled={isDisable} onClick={() => this.props.handleSubmit(this.state.value)}>search</button>
			</div>
		)
	}
}