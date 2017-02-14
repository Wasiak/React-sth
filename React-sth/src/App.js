import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }

  update(evt) {
    this.setState({txt: evt.target.value})
  }

  render() {
    // let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

// const Widget = (props) => 
//   <input type="text" onChange={props.update} />

function Widget(props) {
  return (
    <input type="text" onChange={props.update} />
  );
}


// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "this is default text"
// }

export default App