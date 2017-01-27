console.log('elo')

var Title = React.createClass({
  render: function() {
    return (
      <div className="title">
        Hello, world!
      </div>
    );
  }
});

const Title2 = () => (
  <div className="title2">
    Hello, world2!
  </div>
);

ReactDOM.render(
  <div>
    <Title />
    <h1>elo</h1>
  </div>,
  document.getElementById('main-container')
);

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('main-container');
// );
