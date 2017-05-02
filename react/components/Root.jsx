
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
          <link rel="stylesheet" type="text/css" href="./assets/styles/styles.css"/>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Index {...this.props} />
          <script src='/bundle.js' />
          <script src='./assets/scripts/scripts.js' type='text/javascript'></script>
        </body>
      </html>
    )
  }
})

module.exports = Root
