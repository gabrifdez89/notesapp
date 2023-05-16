import React from 'react';
import { useNotes } from '../useNotes';
import { useNavigate } from 'react-router-dom';
import { AppBox } from '../../ui/AppBox';
import { NotesList } from '../../ui/NotesList';
import { NoteItem } from '../../ui/NoteItem';
import { CreateNoteButton } from '../../ui/CreateNoteButton';
import { EmptyState } from '../../ui/EmptyState';

function HomePage() {
  const navigate = useNavigate();
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
              onEditIconClick={() => navigate('/edit/' + note.id)}
              readOnly={true}
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

export { HomePage };
