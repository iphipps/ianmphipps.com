
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Index = require('./Index.jsx')


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
          <link rel="stylesheet" type="text/css" href="./assets/styles/style.css"/>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Index {...this.props} />
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }
})

module.exports = Root
