
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
            	<h4><span className="stagnate">I believe </span><span className="iterable-beliefs">
                {this.props.beliefs.map(function(belief, index){
                    return <span className="iterate-belief" key={index}><span className="i-believe" ariaHidden={true}>I believe </span>{belief}<span className='sr-only'>, </span></span>
                })}</span></h4>
            </div>
            <div className="brands js-brands">
                <div className='fake-hover'>
                    <svg width="12" height="12" viewBox="0 0 1792 1792"><path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"/></svg>
                </div>
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

