import React from 'react';
import './NotesList.css';

function NotesList({ children }) {
    return (
        <section className="NotesList">
            {children}
        </section>
    );
}

export { NotesList };