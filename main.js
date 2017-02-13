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

// ReactDOM.render(
//   <div>
//     <Title />
//     <h1>elo</h1>
//   </div>,
//   document.getElementById('main-container')
// );

// no ; afterlast line!! it's last arg of render function so only ',' not ; !!
// always packed in one parent elem f.e. <span>
ReactDOM.render(
  <span>
    <h1 id='h1'>Hello world test elo</h1>
    <span>yo yo tu span</span>
  </span>,
  document.getElementById('main-container')
);
