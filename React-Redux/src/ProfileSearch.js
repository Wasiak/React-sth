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
import { connect } from 'react-redux';
import { search } from './actions';

// default export from this file (ProfileSearch  is class ProfileSearch) 
// in others modules it could be import with no {}, see below
class ProfileSearch extends Component {

	render() {

		// is deconstruction, in this function (render) we create const f.e isLoading and 
		// it's === const isLoading = this.state.isLoading
    const {isLoading, error, profile} = this.props;

    let content;

    if (isLoading) {
    	// component could be JS variable
    	content = <Loading />;
    } else if (error) {
    	// value od error in {} it means everything between { } in normaln JS so error is JS variable
    	// () => function means that function run inside ErrorDisplay as props will run here with this context 
    	content = <ErrorDisplay error={error} />;
    } else if (profile) {
    	const { name, avatar_url } = profile;
    	// bind et the end of thi function means that function which is props inside Details component will run here
    	// and this will be this HERE 
    	content = <Details name={name} img={avatar_url} />;
    } else {
    	// could be same as above this.handleSubmit.bind(this)
    	// this arrow function means that in SearchBar runingn function handleSubmit 
    	// give there some arg 'val' and use inside function as arg
      content = <SearchBar handleSubmit={this.props.search} />;
    }

		return(
			<div>
				<h2>this is ProfileSearch</h2>
				{content}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    error: state.error,
    profile: state.profile
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     search(val) {
//       dispatch(search(val));
//     },
//     resetSearch() {
//       dispatch(resetSearch());
//     }
//   }
// }

// same as above
const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearch);
