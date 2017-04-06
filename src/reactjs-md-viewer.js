import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import marked, { Renderer } from 'marked';

export class ReactMDViewer extends Component {
	static propTypes = {
		text: React.PropTypes.string,
		heading: React.PropTypes.func,
		code: React.PropTypes.func,
		blockquote: React.PropTypes.func,
		html: React.PropTypes.func,
		hr: React.PropTypes.func,
		list: React.PropTypes.func,
		listitem: React.PropTypes.func,
		paragraph: React.PropTypes.func,
		table: React.PropTypes.func,
		tablerow: React.PropTypes.func,
		tablecell: React.PropTypes.func,
		strong: React.PropTypes.func,
		em: React.PropTypes.func,
		codespan: React.PropTypes.func,
		br: React.PropTypes.func,
		del: React.PropTypes.func,
		link: React.PropTypes.func,
		image: React.PropTypes.func
	}
	constructor(props) {
    super(props);
    this.state = {
			renderer: new marked.Renderer()
		};
  }
	componentDidMount() {
		this.updateRenderer();
	}
	componentWillReceiveProps(newProps) {
		if (newProps.heading != this.props.heading
			|| newProps.code != this.props.code
			|| newProps.blockquote != this.props.blockquote
			|| newProps.html != this.props.html
			|| newProps.hr != this.props.hr
			|| newProps.list != this.props.list
			|| newProps.listitem != this.props.listitem
			|| newProps.paragraph != this.props.paragraph
			|| newProps.table != this.props.table
			|| newProps.tablerow != this.props.tablerow
			|| newProps.tablecell != this.props.tablecell
			|| newProps.strong != this.props.strong
			|| newProps.em != this.props.em
			|| newProps.codespan != this.props.codespan
			|| newProps.br != this.props.br
			|| newProps.del != this.props.del
			|| newProps.link != this.props.link
			|| newProps.image != this.props.image
		) {
			this.updateRenderer();
		}
	}
	updateRenderer() {
		const renderer = new marked.Renderer();
		if (this.props.heading) renderer.heading = (text, level) => renderToString(<this.props.heading text={text} level={level}/>);
		if (this.props.code) renderer.code = (code, language) => renderToString(<this.props.code code={code} langage={language}/>);
		if (this.props.blockquote) renderer.blockquote = (quote) => renderToString(<this.props.blockquote quote={quote}/>);
		if (this.props.html) renderer.html = (html) => renderToString(<this.props.html html={html}/>);
		if (this.props.hr) renderer.hr = () => renderToString(<this.props.hr />);
		if (this.props.list) renderer.list = (body, ordered) => renderToString(<this.props.list body={body} ordered={ordered}/>);
		if (this.props.listitem) renderer.listitem = (text) => renderToString(<this.props.listitem text={text}/>);
		if (this.props.paragraph) renderer.paragraph = (text) => renderToString(<this.props.paragraph text={text}/>);
		if (this.props.table) renderer.table = (header, body) => renderToString(<this.props.table header={header} body={body}/>);
		if (this.props.tablerow) renderer.tablerow = (content) => renderToString(<this.props.tablerow content={content}/>);
		if (this.props.tablecell) renderer.tablecell = (content, flags) => renderToString(<this.props.tablecell content={content} flags={flags}/>);
		if (this.props.strong) renderer.strong = (text) => renderToString(<this.props.strong text={text}/>);
		if (this.props.em) renderer.em = (text) => renderToString(<this.props.em text={text}/>);
		if (this.props.codespan) renderer.codespan = (code) => renderToString(<this.props.codespan code={code}/>);
		if (this.props.br) renderer.br = () => renderToString(<this.props.br />);
		if (this.props.del) renderer.del = (text) => renderToString(<this.props.del text={text}/>);
		if (this.props.link) renderer.link = (href, title, text) => renderToString(<this.props.link href={href} title={title} text={text}/>);
		if (this.props.image) renderer.image = (href, title, text) => renderToString(<this.props.image href={href} title={title} text={text}/>);
		this.setState({renderer: renderer});
	}
	render () {
		return (
			<div className="MDRender" dangerouslySetInnerHTML={{ __html: marked(this.props.text, { renderer: this.state.renderer }) }} />
		);
	}
}

export default ReactMDViewer;
