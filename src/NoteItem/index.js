import React from 'react';
import './NoteItem.css';

function NoteItem({ title, text, onCrossMarkClick }) {
    const [expanded, setExpanded] = React.useState(false);
    const onNoteItemClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            className={expanded ? "NoteItemExpanded" : "NoteItem"}
            onClick={() => onNoteItemClick()}>
                <div className="NoteItemCloseMark">
                    <span 
                        className="material-symbols-outlined"
                        onClick={onCrossMarkClick}>
                            close
                    </span>
                </div>
                <h1>{title}</h1>
                <div className={expanded ? "NoteItemTextContainerExpanded" : "NoteItemTextContainer"}>
                    <p>{text}</p>
                </div>
        </div>
    );
}

export { NoteItem };