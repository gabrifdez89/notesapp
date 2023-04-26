import React from 'react';
import './NotesList.css';

function NotesList(props) {
    return (
        <section className="NotesList">
            {props.children}
        </section>
    );
}

export { NotesList };