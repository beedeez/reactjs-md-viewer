'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReactMDViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _commonmark = require('commonmark');

var _commonmark2 = _interopRequireDefault(_commonmark);

var _commonmarkReactRenderer = require('commonmark-react-renderer');

var _commonmarkReactRenderer2 = _interopRequireDefault(_commonmarkReactRenderer);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parser = new _commonmark2.default.Parser();

var ReactMDViewer = exports.ReactMDViewer = function (_Component) {
	_inherits(ReactMDViewer, _Component);

	function ReactMDViewer(props) {
		_classCallCheck(this, ReactMDViewer);

		var _this = _possibleConstructorReturn(this, (ReactMDViewer.__proto__ || Object.getPrototypeOf(ReactMDViewer)).call(this, props));

		_this.state = {
			renderer: new _commonmarkReactRenderer2.default()
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
			if (newProps.htmlblock != this.props.htmlblock || newProps.htmlinline != this.props.htmlinline || newProps.codeblock != this.props.codeblock || newProps.code != this.props.code || newProps.heading != this.props.heading || newProps.link != this.props.link || newProps.image != this.props.image || newProps.list != this.props.list || newProps.listitem != this.props.listitem || newProps.common != this.props.common || newProps.paragraph != this.props.paragraph || newProps.blockquote != this.props.blockquote || newProps.strong != this.props.strong || newProps.hr != this.props.hr || newProps.em != this.props.em || newProps.br != this.props.br || newProps.softbreak != this.props.softbreak) {
				this.updateRenderer();
			}
		}
	}, {
		key: 'updateRenderer',
		value: function updateRenderer() {
			var _this2 = this;

			var renderers = {};

			if (this.props.htmlblock) renderers.HtmlBlock = function (props) {
				return _react2.default.createElement(_this2.props.htmlblock, props);
			};
			if (this.props.htmlinline) renderers.HtmlInline = function (props) {
				return _react2.default.createElement(_this2.props.htmlinline, props);
			};
			if (this.props.codeblock) renderers.CodeBlock = function (props) {
				return _react2.default.createElement(_this2.props.codeblock, props);
			};
			if (this.props.code) renderers.Code = function (props) {
				return _react2.default.createElement(_this2.props.code, props);
			};
			if (this.props.heading) renderers.Heading = function (props) {
				return _react2.default.createElement(_this2.props.heading, props);
			};
			if (this.props.link) renderers.Link = function (props) {
				return _react2.default.createElement(_this2.props.link, props);
			};
			if (this.props.image) renderers.Image = function (props) {
				return _react2.default.createElement(_this2.props.image, props);
			};

			if (this.props.list) renderers.List = function (props) {
				return _react2.default.createElement(_this2.props.list, props);
			};
			if (this.props.listitem) renderers.Item = function (props) {
				return _react2.default.createElement(_this2.props.listitem, props);
			};

			if (this.props.common) renderers.Common = function (props) {
				return _react2.default.createElement(_this2.props.common, props);
			};
			if (this.props.paragraph) renderers.Paragraph = function (props) {
				return _react2.default.createElement(_this2.props.paragraph, props);
			};
			if (this.props.blockquote) renderers.Blockquote = function (props) {
				return _react2.default.createElement(_this2.props.blockquote, props);
			};

			if (this.props.strong) renderers.strong = function (props) {
				return _react2.default.createElement(_this2.props.strong, props);
			};
			if (this.props.hr) renderers.ThematicBreak = function (props) {
				return _react2.default.createElement(_this2.props.hr, props);
			};
			if (this.props.em) renderers.Emph = function (props) {
				return _react2.default.createElement(_this2.props.em, props);
			};
			if (this.props.br) renderers.LineBreak = function (props) {
				return _react2.default.createElement(_this2.props.br, props);
			};
			if (this.props.softbreak) renderers.SoftBreak = function (props) {
				return _react2.default.createElement(_this2.props.softbreak, props);
			};

			this.setState({ renderer: new _commonmarkReactRenderer2.default({
					renderers: renderers
				}) });
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'MDRender' },
				this.state.renderer.render(parser.parse(this.props.text))
			);
		}
	}]);

	return ReactMDViewer;
}(_react.Component);

ReactMDViewer.propTypes = {
	text: _propTypes2.default.string,
	htmlblock: _propTypes2.default.func,
	htmlinline: _propTypes2.default.func,
	codeblock: _propTypes2.default.func,
	code: _propTypes2.default.func,
	heading: _propTypes2.default.func,
	link: _propTypes2.default.func,
	image: _propTypes2.default.func,
	list: _propTypes2.default.func,
	listitem: _propTypes2.default.func,
	common: _propTypes2.default.func,
	paragraph: _propTypes2.default.func,
	blockquote: _propTypes2.default.func,
	strong: _propTypes2.default.func,
	hr: _propTypes2.default.func,
	em: _propTypes2.default.func,
	br: _propTypes2.default.func,
	softbreak: _propTypes2.default.func
};
exports.default = ReactMDViewer;