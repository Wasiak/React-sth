import React, { Component } from 'react';

export default class SearchBar extends Component {

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
				  // arrow function in event 'onClick' means that it will be run afeter click, 
				  // without this it would be running when render 
				  // { } is JS and without arrow function React give to onClick value of faunction returned probably undefined
				<button disabled={isDisable} onClick={() => this.props.handleSubmit(this.state.value)}>search</button>
			</div>
		)
	}
}