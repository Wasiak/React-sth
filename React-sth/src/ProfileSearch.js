import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Loading from './Loading';
import Details from './Details';
import {get} from './utils';
import ErrorDisplay from './ErrorDisplay';

export default class ProfileSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			profile: null,
			error: null
		};
	}

  async handleSubmit(val) {
    this.setState({isLoading: true});
    // get(`https://api.github.com/users/${val}`);
    // get('https://api.github.com/users/' + val).then(profile => {
    //   this.setState({profile, isLoading: false});
    // });
		try {
			const profile = await get('https://api.github.com/users/' + val);
			this.setState({profile, isLoading: false});
		} catch (err) {
			this.setState({error: err, isLoading: false});
		}
  }

  resetSearch() {
  	this.setState({
  		isLoading: false,
			profile: null,
			error: null
		});
  }

	render() {

		const { isLoading, error, profile } = this.state;

    let content;

    if (isLoading) {
    	content = <Loading />;
    } else if (error) {
    	content = <ErrorDisplay error={error} resetSearch={() => this.resetSearch()}/>;
    } else if (profile) {
    	const { name, avatar_url } = profile;
    	content = <Details name={name} img={avatar_url} resetSearch={this.resetSearch.bind(this)}/>;
    } else {
      content = <SearchBar handleSubmit={evt => this.handleSubmit(evt)} />;
    }

		return(
			<div>
				<h2>this is ProfileSearch</h2>
				{content}
			</div>
		)
	}
}

// https://api.github.com/users/
