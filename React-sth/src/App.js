import React, { Component } from 'react';
import ProfileSearch from './ProfileSearch';
import './classes.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       num: 2
//     }
//   }

//   update(evt) {
//     this.setState({num: evt.target.value})
//   }

//   render() {
//     // let txt = this.props.txt
//     return (
//       <div>
//         <h1>{this.state.num}</h1>
//         <Widget update={this.update.bind(this)} />
//         <Widget2 doubleTxt={this.state.num} title={this.props.txt} />
//       </div>
//     )
//   }
// }

// // const Widget = (props) => 
// //   <input type="text" onChange={props.update} />

// function Widget(props) {
//   return (
//     <input type="number" onChange={props.update} />
//   );
// }

// function Widget2(props) {
//   return (
//     <div>
//       <span>{props.title}</span>
//       <input type="number" value={props.doubleTxt * 2} />
//     </div>
//   );
// }


// App.propTypes = {
//   txt: React.PropTypes.string,
//   num: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   num: 2,
//   txt: 'Elo here double value'
// }

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>This is App</h1>
        <ProfileSearch />
      </div>
    );
  }
}