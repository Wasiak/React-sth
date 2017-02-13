import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      cat: 0
    }
  }

  update(evt) {
    this.setState({txt: evt.target.value})
  }

  render() {
    // let txt = this.props.txt
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "this is default text"
// }

export default App