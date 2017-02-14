import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 2
    }
  }

  update(evt) {
    this.setState({num: evt.target.value})
  }

  render() {
    // let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.num}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget2 doubleTxt={this.state.num} />
      </div>
    )
  }
}

// const Widget = (props) => 
//   <input type="text" onChange={props.update} />

function Widget(props) {
  return (
    <input type="number" onChange={props.update} />
  );
}

function Widget2(props) {
  return (
    <input type="number" value={props.doubleTxt * 2} />
  );
}


App.propTypes = {
  txt: React.PropTypes.string,
  num: React.PropTypes.number.isRequired
}

App.defaultProps = {
  num: 2
}

export default App