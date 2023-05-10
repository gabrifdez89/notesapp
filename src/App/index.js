import React from 'react';
import { useNotes } from './useNotes';
import { AppBox } from '../AppBox';
import { NotesList } from '../NotesList';
import { NoteItem } from '../NoteItem';
import { CreateNoteButton } from '../CreateNoteButton';
import { EmptyState } from '../EmptyState';

function App() {
  const { state, stateUpdaters } = useNotes();

  const {
    notes,
  } = state;

  const {
    createNote,
    deleteNote,
    editNote,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <AppBox>
        <NotesList
          notes={notes}
          onEmptyNotes={() => <EmptyState />}
          render={note => (
            <NoteItem
              key={note.id}
              note={note}
              onCrossMarkClick={() => deleteNote(note)}
              onNoteChange={() => editNote(note)}
            />
          )}
        />
        <CreateNoteButton
          onClick={() => createNote()}
        />
      </AppBox>
    </React.Fragment>
  );
}

export default App;
