import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import CommonMark from 'commonmark';
import ReactRenderer from 'commonmark-react-renderer';
import PropTypes from 'prop-types';
const parser = new CommonMark.Parser();

export class ReactMDViewer extends Component {
	static propTypes = {
		text: PropTypes.string,
		htmlblock: PropTypes.func,
		htmlinline: PropTypes.func,
		codeblock: PropTypes.func,
		code: PropTypes.func,
		heading: PropTypes.func,
		link: PropTypes.func,
		image: PropTypes.func,
		list: PropTypes.func,
		listitem: PropTypes.func,
		common: PropTypes.func,
		paragraph: PropTypes.func,
		blockquote: PropTypes.func,
		strong: PropTypes.func,
		hr: PropTypes.func,
		em: PropTypes.func,
		br: PropTypes.func,
		softbreak: PropTypes.func,
		audio: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.state = {
			renderer: new ReactRenderer()
		};
	}
	componentDidMount() {
		this.updateRenderer();
	}
	componentWillReceiveProps(newProps) {
		if (
			newProps.htmlblock != this.props.htmlblock ||
			newProps.htmlinline != this.props.htmlinline ||
			newProps.codeblock != this.props.codeblock ||
			newProps.code != this.props.code ||
			newProps.heading != this.props.heading ||
			newProps.link != this.props.link ||
			newProps.image != this.props.image ||
			newProps.list != this.props.list ||
			newProps.listitem != this.props.listitem ||
			newProps.common != this.props.common ||
			newProps.paragraph != this.props.paragraph ||
			newProps.blockquote != this.props.blockquote ||
			newProps.strong != this.props.strong ||
			newProps.hr != this.props.hr ||
			newProps.em != this.props.em ||
			newProps.br != this.props.br ||
			newProps.softbreak != this.props.softbreak ||
			newProps.audio != this.props.audio
		) {
			this.updateRenderer();
		}
	}
	updateRenderer() {
		const renderers = {};

		if (this.props.htmlblock)
			renderers.HtmlBlock = props => <this.props.htmlblock {...props} />;
		if (this.props.htmlinline)
			renderers.HtmlInline = props => <this.props.htmlinline {...props} />;
		if (this.props.codeblock)
			renderers.CodeBlock = props => <this.props.codeblock {...props} />;
		if (this.props.code)
			renderers.Code = props => <this.props.code {...props} />;
		if (this.props.heading)
			renderers.Heading = props => <this.props.heading {...props} />;
		if (this.props.link)
			renderers.Link = props => <this.props.link {...props} />;
		if (this.props.image)
			renderers.Image = props => <this.props.image {...props} />;

		if (this.props.list)
			renderers.List = props => <this.props.list {...props} />;
		if (this.props.listitem)
			renderers.Item = props => <this.props.listitem {...props} />;

		if (this.props.common)
			renderers.Common = props => <this.props.common {...props} />;
		if (this.props.paragraph)
			renderers.Paragraph = props => <this.props.paragraph {...props} />;
		if (this.props.blockquote)
			renderers.Blockquote = props => <this.props.blockquote {...props} />;

		if (this.props.strong)
			renderers.strong = props => <this.props.strong {...props} />;
		if (this.props.hr)
			renderers.ThematicBreak = props => <this.props.hr {...props} />;
		if (this.props.em) renderers.Emph = props => <this.props.em {...props} />;
		if (this.props.br)
			renderers.LineBreak = props => <this.props.br {...props} />;
		if (this.props.softbreak)
			renderers.SoftBreak = props => <this.props.softbreak {...props} />;
		if (this.props.audio)
			renderers.Audio = props => <this.props.audio {...props} />;

		this.setState({
			renderer: new ReactRenderer({
				renderers
			})
		});
	}
	render() {
		return (
			<div className="MDRender">
				{this.state.renderer.render(parser.parse(this.props.text))}
			</div>
		);
	}
}

export default ReactMDViewer;
