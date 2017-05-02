
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <div className="main">
            <div className="non-brands js-non-brands">
        	
            	<h2>My name is Ian Phipps. I&#39;m a <a href={this.props.linkedin}>web engineer</a> living in Brooklyn<span className="sr-only">, New York</span>. </h2>
            	<h1>I <a className='code-link js-code-link' href={this.props.github}>code</a> with 
            		<span className="iterable">
            		{this.props.code.map(function(tech, index){
            		return <span className="iterates" key={index}> {tech}<span className='sr-only'>,</span></span>
            		})}</span>
            	 </h1>
            	<h3>for big and small <span className="brand-fake-link js-brand-fake-link">brands</span> alike.</h3>
            	<h4>I believe <span className="iterable-beliefs">
                {this.props.beliefs.map(function(belief, index){
                    return <span className="iterate-belief" key={index}>{belief}<span className='sr-only'>,</span></span>
                })}</span></h4>
            </div>
            <div className="brands js-brands">
                <ul>
                    {this.props.brands.map(function(brand, index){
                        return (<li key={index}><span className="sr-only">{brand.name}</span> <img src={"./assets/images/" + brand.logo}/></li>);
                    })}
                </ul>
            </div>
        	

      </div>
    )
  }
})

module.exports = Index

