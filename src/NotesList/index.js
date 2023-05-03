import React from 'react';
import './NotesList.css';

function NotesList(props) {
    return (
        <section className="NotesList">
            {!props.notes.length && props.onEmptyNotes()}
            {props.notes.map(props.render)}
        </section>
    );
}

export { NotesList };