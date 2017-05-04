
var React = require('react')

var Index = React.createClass({
  render: function () {
    return (
      <div className="main">
            <div className="non-brands js-non-brands">
        	
            	<h2>My name is Ian Phipps. <br/>I&#39;m a <a href={this.props.linkedin}><span className="linky-1">web</span>&nbsp;<span className="link-2">engineer</span></a> living in Brooklyn<span className="sr-only">, New York</span>. </h2>
            	<h1>I <a className='code-link js-code-link' href={this.props.github}>code</a> with 
            		<span className="iterable">
            		{this.props.code.map(function(tech, index){
            		return <span className="iterates" key={index}> {tech}<span ariaHidden={true}>.</span><span className='sr-only'>,</span></span>
            		})}</span>
            	 </h1>
            	<h3>And I&#39;ve worked for some great <span className="brand-fake-link js-brand-fake-link">clients</span>.</h3>
            	<br/><a className="cta-link" href="https://m.me/imphipps">Message me</a> or email me at ian@ianmphipps.com
            </div>
            <div className="brands js-brands">
                <div className='fake-hover'>
                    <svg width="12" height="12" viewBox="0 0 1792 1792"><path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"/></svg>
                </div>
                <ul>
                    {this.props.brands.map(function(brand, index){
                        return (<li key={index} className={brand.classnames}><span className="sr-only">{brand.name}</span> <img src={"./assets/images/" + brand.logo}/></li>);
                    })}
                </ul>
            </div>
        	

      </div>
    )
  }
})

module.exports = Index

