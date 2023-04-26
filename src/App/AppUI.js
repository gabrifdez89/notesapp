import React from 'react';
import { NotesContext } from '../NotesContext';
import { AppBox } from '../AppBox';
import { NotesList } from '../NotesList';
import { NoteItem } from '../NoteItem';
import { CreateNoteButton } from '../CreateNoteButton';

function AppUI() {
    const { 
        notes,
        createNote,
        deleteNote,
    } = React.useContext(NotesContext);

    return (
        <React.Fragment>
            <AppBox>
                <NotesList>
                    {notes.map(note => (
                        <NoteItem
                            title={note.title}
                            text={note.text}
                            key={note.id}
                            onCrossMarkClick={() => deleteNote(note.id)}
                        />
                    ))}
                </NotesList>
                <CreateNoteButton
                    onClick={() => createNote()}
                />
            </AppBox>
        </React.Fragment>
    );
}

export { AppUI }