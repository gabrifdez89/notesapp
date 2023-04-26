import React from 'react';
import { NotesContext } from '../NotesContext';
import { AppBox } from '../AppBox';
import { NotesList } from '../NotesList';
import { NoteItem } from '../NoteItem';
import { CreateNoteButton } from '../CreateNoteButton';

function AppUI() {
    return (
        <React.Fragment>
            <AppBox>
                <NotesContext.Consumer>
                    {({ notes, deleteNote }) => (
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
                    )}
                </NotesContext.Consumer>
                <NotesContext.Consumer>
                    {({ createNote }) => (
                        <CreateNoteButton 
                            onClick={() => createNote()}
                        />
                    )}
                </NotesContext.Consumer>
            </AppBox>
        </React.Fragment>
    );
}

export { AppUI }