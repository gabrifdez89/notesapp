import React from 'react';
import ContentEditable from 'react-contenteditable';

class ContentEditableText extends React.Component {
  constructor({onChange, note}) {
    super();
    this.contentEditable = React.createRef();
    this.state = {html: note.text};
    this.onChange = onChange;
    this.note = note;
  };

  handleChange = evt => {
    this.setState({html: evt.target.value});
    this.note.text = evt.target.value;
    this.onChange(this.note);
  };

  render = () => {
    return <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />
  };
};

export { ContentEditableText };