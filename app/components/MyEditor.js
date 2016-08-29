import React, {Component} from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';

export default class MyEditor extends Component {
  constructor(props) {
    super(props);
    const {host} = this.props.host;
    this.state = {editorState: EditorState.createWithContent(ContentState.createFromText(host))}
    this.onChange = (editorState) => {
      const currentHost = this.state.editorState.getCurrentContent().getPlainText();
      const nextHost = editorState.getCurrentContent().getPlainText();
      if (currentHost !== nextHost) {
        this.props.changeHost(nextHost);
      }
      this.setState({editorState});
    }
  }
  render() {
    const {editorState} = this.state;
    return(
        <div className='editor'>
        <Editor
            editorState={editorState}
            onChange={this.onChange}
            ref="editor" />
        </div>
    );
  }
}
