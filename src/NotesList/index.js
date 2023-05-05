import React from 'react';
import './NotesList.css';

function NotesList(props) {
    const renderFunc = props.children || props.render;

    return (
        <section className="NotesList">
            {!props.notes.length && props.onEmptyNotes()}
            {props.notes.map(renderFunc)}
        </section>
    );
}

export { NotesList };