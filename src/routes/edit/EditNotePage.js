import React from 'react';
import { useNotes } from '../useNotes';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppBox } from '../../ui/AppBox';
import { NotesList } from '../../ui/NotesList';
import { NoteItem } from '../../ui/NoteItem';
import { EmptyState } from '../../ui/EmptyState';

function EditNotePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);
  const { state, stateUpdaters } = useNotes();

  const {
    editNote,
  } = stateUpdaters;

  const {
    getNote,
  } = state;

  let note ;

  if (location.state?.note) {
    note = location.state.note;
  } else {
    note = getNote(id);
  }

  if (note) {
    const notes = [note];
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
                onNoteChange={() => editNote(note)}
                onCrossMarkClick={() => navigate('/')}
                readOnly={false}
              />
            )}
          />
        </AppBox>
      </React.Fragment>
    );
  } else {
    return <p>Not found</p>
  }
}

export { EditNotePage };
