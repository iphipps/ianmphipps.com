
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Index = require('./Index.jsx')

var google = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-44522370-1', 'auto');
            ga('send', 'pageview');`;

var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" type="text/css" href="./assets/styles/styles.css"/>
          <title>Ian Phipps Portfolio Site: Web Engineer/Developmer &amp; based in Brooklyn, New York</title>
          <meta name="copyright" content="Copyright &amp;copy; 2017, Ian Phipps.  All rights reserved."/>
          <meta name="description" content="Ian Phipps is a Brooklyn based professional web engineer with a focus on web and isomorphic applications written in javascript / node, css / sass and html. He believes that the web experience should tell a story.  It should be fast and accessible.  Lastly, it ought to be beautiful.  As a freelancer, Ian is available for new projects / contracts."/>
          <meta name="keywords" content="brooklyn, new york, web design, software development, web development, web engineering, web application, single page, isomorphic, react, javascript."/> 
          <link rel="icon" type="image/png" href="assets/images/imp.ico"/>
        </head>
        <body>
          <div className="wrap">
            <Index {...this.props} />
          </div>
          <script src='./assets/scripts/scripts.js' type='text/javascript'></script>
          <script dangerouslySetInnerHTML={{__html: google}}>
            

          </script>
        </body>
      </html>
    )
  }
})

module.exports = Root
