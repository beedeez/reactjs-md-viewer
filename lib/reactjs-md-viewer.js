'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReactMDViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMDViewer = exports.ReactMDViewer = function (_Component) {
	_inherits(ReactMDViewer, _Component);

	function ReactMDViewer(props) {
		_classCallCheck(this, ReactMDViewer);

		var _this = _possibleConstructorReturn(this, (ReactMDViewer.__proto__ || Object.getPrototypeOf(ReactMDViewer)).call(this, props));

		_this.state = {
			renderer: new _marked2.default.Renderer()
		};
		return _this;
	}

	_createClass(ReactMDViewer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.updateRenderer();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			if (newProps.heading != this.props.heading || newProps.code != this.props.code || newProps.blockquote != this.props.blockquote || newProps.html != this.props.html || newProps.hr != this.props.hr || newProps.list != this.props.list || newProps.listitem != this.props.listitem || newProps.paragraph != this.props.paragraph || newProps.table != this.props.table || newProps.tablerow != this.props.tablerow || newProps.tablecell != this.props.tablecell || newProps.strong != this.props.strong || newProps.em != this.props.em || newProps.codespan != this.props.codespan || newProps.br != this.props.br || newProps.del != this.props.del || newProps.link != this.props.link || newProps.image != this.props.image) {
				this.updateRenderer();
			}
		}
	}, {
		key: 'updateRenderer',
		value: function updateRenderer() {
			var _this2 = this;

			var renderer = new _marked2.default.Renderer();
			if (this.props.heading) renderer.heading = function (text, level) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.heading, { text: text, level: level }));
			};
			if (this.props.code) renderer.code = function (code, language) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.code, { code: code, langage: language }));
			};
			if (this.props.blockquote) renderer.blockquote = function (quote) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.blockquote, { quote: quote }));
			};
			if (this.props.html) renderer.html = function (html) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.html, { html: html }));
			};
			if (this.props.hr) renderer.hr = function () {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.hr, null));
			};
			if (this.props.list) renderer.list = function (body, ordered) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.list, { body: body, ordered: ordered }));
			};
			if (this.props.listitem) renderer.listitem = function (text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.listitem, { text: text }));
			};
			if (this.props.paragraph) renderer.paragraph = function (text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.paragraph, { text: text }));
			};
			if (this.props.table) renderer.table = function (header, body) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.table, { header: header, body: body }));
			};
			if (this.props.tablerow) renderer.tablerow = function (content) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.tablerow, { content: content }));
			};
			if (this.props.tablecell) renderer.tablecell = function (content, flags) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.tablecell, { content: content, flags: flags }));
			};
			if (this.props.strong) renderer.strong = function (text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.strong, { text: text }));
			};
			if (this.props.em) renderer.em = function (text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.em, { text: text }));
			};
			if (this.props.codespan) renderer.codespan = function (code) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.codespan, { code: code }));
			};
			if (this.props.br) renderer.br = function () {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.br, null));
			};
			if (this.props.del) renderer.del = function (text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.del, { text: text }));
			};
			if (this.props.link) renderer.link = function (href, title, text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.link, { href: href, title: title, text: text }));
			};
			if (this.props.image) renderer.image = function (href, title, text) {
				return (0, _server.renderToString)(_react2.default.createElement(_this2.props.image, { href: href, title: title, text: text }));
			};
			this.setState({ renderer: renderer });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'MDRender', dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.props.text, { renderer: this.state.renderer }) } });
		}
	}]);

	return ReactMDViewer;
}(_react.Component);

ReactMDViewer.propTypes = {
	text: _react2.default.PropTypes.string,
	heading: _react2.default.PropTypes.func,
	code: _react2.default.PropTypes.func,
	blockquote: _react2.default.PropTypes.func,
	html: _react2.default.PropTypes.func,
	hr: _react2.default.PropTypes.func,
	list: _react2.default.PropTypes.func,
	listitem: _react2.default.PropTypes.func,
	paragraph: _react2.default.PropTypes.func,
	table: _react2.default.PropTypes.func,
	tablerow: _react2.default.PropTypes.func,
	tablecell: _react2.default.PropTypes.func,
	strong: _react2.default.PropTypes.func,
	em: _react2.default.PropTypes.func,
	codespan: _react2.default.PropTypes.func,
	br: _react2.default.PropTypes.func,
	del: _react2.default.PropTypes.func,
	link: _react2.default.PropTypes.func,
	image: _react2.default.PropTypes.func
};
exports.default = ReactMDViewer;