
var React = require('react')
var Root = require('./components/Root.jsx')
var ReactDOMServer = require('react-dom/server');


module.exports = function render (locals, callback) {
    var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Root, locals))
    callback(null, '<!DOCTYPE html>' + html)
}

