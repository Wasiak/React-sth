// import React from react (React is default export from react) and { Component } 
// COmponent is React.Component so { } is deconstructing and now we have imported React.Component 
// known here sa Component
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Loading from './Loading';
import Details from './Details';
// get is not default export from utils so is in { } and now known here as get
import {get} from './utils';
import ErrorDisplay from './ErrorDisplay';

// default export from this file (ProfileSearch  is class ProfileSearch) 
// in others modules it could be import with no {}, see below
export default class ProfileSearch extends Component {

// constructor is function call when creating new ProfileSearch component
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			profile: null,
			error: null
		};
	}

// async in new syntax sais that function is asyncronous and inside of it  we could use 'await'
// work similar as promise but is shorter and more intuitive to understand code 
  async handleSubmit(val) {
    this.setState({isLoading: true});
    // syntax with `` make possible use ${someVariable} in f.e. url ${...} is normaln JS variable
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
  	// always when changing values of state kays use  this.setState function, is react syntax !!
  	this.setState({
  		isLoading: false,
			profile: null,
			error: null
		});
  }

	render() {

		// is deconstruction, in this function (render) we create const f.e isLoading and 
		// it's === const isLoading = this.state.isLoading
		const { isLoading, error, profile } = this.state;

    let content;

    if (isLoading) {
    	// component could be JS variable
    	content = <Loading />;
    } else if (error) {
    	// value od error in {} it means everything between { } in normaln JS so error is JS variable
    	// () => function means that function run inside ErrorDisplay as props will run here with this context 
    	content = <ErrorDisplay error={error} resetSearch={() => this.resetSearch()}/>;
    } else if (profile) {
    	const { name, avatar_url } = profile;
    	// bind et the end of thi function means that function which is props inside Details component will run here
    	// and this will be this HERE 
    	content = <Details name={name} img={avatar_url} resetSearch={this.resetSearch.bind(this)}/>;
    } else {
    	// could be same as above this.handleSubmit.bind(this)
    	// this arrow function means that in SearchBar runingn function handleSubmit 
    	// give there some arg 'val' and use inside function as arg
      content = <SearchBar handleSubmit={val => this.handleSubmit(val)} />;
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
