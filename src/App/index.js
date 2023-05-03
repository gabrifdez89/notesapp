import React from 'react';
import { useNotes } from './useNotes';
import { AppBox } from '../AppBox';
import { NotesList } from '../NotesList';
import { NoteItem } from '../NoteItem';
import { CreateNoteButton } from '../CreateNoteButton';
import { EmptyState } from '../EmptyState';

function App() {
  const { 
    notes,
    createNote,
    deleteNote,
    editNote,
  } = useNotes();

  return (
    <React.Fragment>
        <AppBox>
            <NotesList>
                {notes.map(note => (
                    <NoteItem
                        key={note.id}
                        note={note}
                        onCrossMarkClick={() => deleteNote(note.id)}
                        onNoteChange={() => editNote(note)}
                    />
                ))}
                {notes.length === 0 ? <EmptyState/> : ''}
            </NotesList>
            <CreateNoteButton
                onClick={() => createNote()}
            />
        </AppBox>
    </React.Fragment>
  );
}

export default App;
