import React from 'react';
import './NoteItem.css';
import { ContentEditableTitle } from '../ContentEditableTitle/index.js';
import { ContentEditableText } from '../ContentEditableText/index.js';

function NoteItem({ note, onCrossMarkClick, onNoteChange }) {
    const [expanded, setExpanded] = React.useState(false);
    const onNoteItemExpandMarkClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={expanded ? "NoteItemExpanded" : "NoteItem"}>
                <div className="NoteItemCloseMark">
                    <span 
                        className="material-symbols-outlined"
                        onClick={onCrossMarkClick}>
                            close
                    </span>
                </div>
                <h1>
                    <ContentEditableTitle
                        onChange={onNoteChange}
                        note={note}
                    />
                </h1>
                <div className={expanded ? "NoteItemTextContainerExpanded" : "NoteItemTextContainer"}>
                    <ContentEditableText
                        onChange={onNoteChange}
                        note={note}
                    />
                </div>
                <div className="NoteItemExpandMark">
                    {expanded && 
                        <span 
                            className="material-symbols-outlined"
                            onClick={() => onNoteItemExpandMarkClick()}>
                                expand_less
                        </span>
                    }
                    {!expanded &&
                        <span 
                            className="material-symbols-outlined"
                            onClick={() => onNoteItemExpandMarkClick()}>
                                expand_more
                        </span>
                    }
                </div>
        </div>
    );
}

export { NoteItem };