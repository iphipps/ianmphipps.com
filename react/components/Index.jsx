
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
        hi
        	{this.props.h1}
        </h1>
      </div>
    )
  }
})

module.exports = Index

