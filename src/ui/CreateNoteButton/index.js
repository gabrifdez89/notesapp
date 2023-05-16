import React from 'react';
import './CreateNoteButton.css';

function CreateNoteButton({ onClick }) {
    return (
        <button className="CreateNoteButton"
            onClick={onClick}
        >
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    )
}

export { CreateNoteButton };