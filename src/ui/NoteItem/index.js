import React from 'react';
import './NoteItem.css';
import { ContentEditableTitle } from '../ContentEditableTitle';
import { ContentEditableText } from '../ContentEditableText';

function NoteItem({ note, onCrossMarkClick, onNoteChange, onEditIconClick, readOnly }) {
    const [expanded, setExpanded] = React.useState(false);
    const onNoteItemExpandMarkClick = () => {
        setExpanded(!expanded);
    };
    const noteEditIcon = readOnly ? (
        <div className="NoteItemEditIcon">
                <span
                    className="material-symbols-outlined"
                    onClick={() => onEditIconClick(note)}>
                    edit
                </span>
            </div>
    ) : '';

    return (
        <div
            className={expanded ? "NoteItemExpanded" : "NoteItem"}>
            <div className="NoteItemCloseMark">
                <span
                    className="material-symbols-outlined"
                    onClick={() => onCrossMarkClick(note)}>
                    close
                </span>
            </div>
            {noteEditIcon}
            <h1>
                <ContentEditableTitle
                    onChange={() => onNoteChange(note)}
                    note={note}
                    readOnly={readOnly}
                />
            </h1>
            <div className={expanded ? "NoteItemTextContainerExpanded" : "NoteItemTextContainer"}>
                <ContentEditableText
                    onChange={() => onNoteChange(note)}
                    note={note}
                    readOnly={readOnly}
                />
            </div>
            <div className="NoteItemExpandMark">
                <span
                    className="material-symbols-outlined"
                    onClick={() => onNoteItemExpandMarkClick()}>
                    {expanded ? `expand_less` : `expand_more`}
                </span>
            </div>
        </div>
    );
}

export { NoteItem };