import React from 'react';
import ContentEditable from 'react-contenteditable';

class ContentEditableText extends React.Component {
  constructor({onChange, note }) {
    super();
    this.onChange = onChange;
    this.note = note;
  };

  handleChange = evt => {
    this.note.text = evt.target.value;
    this.onChange(this.note);
  };

  render = () => {
    return <ContentEditable
              innerRef={this.contentEditable}
              html={this.note.text} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            />
  };
};

export { ContentEditableText };