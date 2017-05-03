
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
          <div className="wrap">
            <Index {...this.props} />
          </div>
          <div className="footer">
            <a href="https://m.me/imphipps">
              <svg height="100px" width="100px" version="1.1" viewBox="0 0 224 226">
               <defs>
                <linearGradient id="a" y1="6.76%" x2="50%" x1="50%" y2="95.6%">
                 <stop stop-color="#00C6FF" offset="0"/>
                 <stop stop-color="#0068FF" offset="1"/>
                </linearGradient>
               </defs>
              <path fill="url(#a)" d="m41.255 185.52v40.2l37.589-21.37c10.478 3.02 21.616 4.65 33.156 4.65 61.86 0 112-46.79 112-104.5 0-57.714-50.14-104.5-112-104.5-61.856 0-112 46.786-112 104.5 0 32.68 16.078 61.86 41.255 81.02z"/>
              <path fill="#fff" d="m100.04 75.878l-60.401 63.952 54.97-30.16 28.721 30.16 60.06-63.952-54.36 29.632-28.99-29.632z"/>
              </svg>
            </a>
          </div>
          <script src='/bundle.js' />
          <script src='./assets/scripts/scripts.js' type='text/javascript'></script>
        </body>
      </html>
    )
  }
})

module.exports = Root
