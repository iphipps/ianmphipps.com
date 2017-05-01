
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <div>

        	
        	<h2>My name is Ian Phipps. I&#39;m a <a href={this.props.linkedin}>web engineer</a> living in Brooklyn<span className="sr-only">, New York</span>.</h2>
        	<h1>I write <a href={this.props.github}>
        		<span className="iterable">
        		{this.props.code.map(function(tech, index){
        		return <span className="iterates" key={index}>{tech}</span>
        		})}</span>
        	</a></h1>
        	<h3>for big and small brands alike.</h3>
        	<h4>I believe that all web experiences should be fast, accessible and beautiful.</h4>
        	
        <p className="sr-only">Ian is comfortable with a variety of web technologies including but not limited to:</p>
        <ul>
        	
        </ul>
      </div>
    )
  }
})

module.exports = Index

